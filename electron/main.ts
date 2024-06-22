import { app, BrowserWindow, ipcMain, IpcMainInvokeEvent } from "electron";
import path from "node:path";
import { createFileRoute, createURLRoute } from "electron-router-dom";
import { CreateProjectPayload, Project } from "./types/Project.type";
import { createProject, deleteProject, getAllProjects, getProjectById, updateProject } from "./services/ProjectService";

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, "../dist");
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "icon.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });

  win.setMenuBarVisibility(false);


  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(createURLRoute(VITE_DEV_SERVER_URL, "main"));
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(
      ...createFileRoute(path.join(process.env.DIST, "index.html"), "main")
    );
  }

  ipcMain.handle('create-project', async (_event: IpcMainInvokeEvent, createProjectPayload : CreateProjectPayload) => {
    try {
      const newProject = await createProject(createProjectPayload)
      return newProject
    } catch (error) {
      return { error: error }
    }
  })

  ipcMain.handle('get-project-by-id', async (_event: IpcMainInvokeEvent, id: string) => {
    try {
      const project = await getProjectById(id)
      return project
    } catch (error) {
      return { error: error }
    }
  })

  ipcMain.handle('get-all-projects', async () => await getAllProjects())

  ipcMain.handle('update-project', async (_event, id: string, updatedProject: Partial<Project>) => {
    try {
      const numUpdated = await updateProject(id, updatedProject)
      return numUpdated
    } catch (error) {
      return { error: error }
    }
  })

  ipcMain.handle('delete-project', async (_event, id: string) => {
    try {
      const numRemoved = await deleteProject(id)
      return numRemoved
    } catch (error) {
      return { error: error }
    }
  })

}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(createWindow);
