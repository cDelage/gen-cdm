import { contextBridge, ipcRenderer } from "electron";
import { CreateProjectPayload, Project } from "./types/Project.type";
import { electronAPI } from "@electron-toolkit/preload";

// Custom APIs for renderer
const PROJECTS = {
  postPrompt: async (prompt: string) => await ipcRenderer.invoke('post-prompt', prompt),
  createProject: async (payload : CreateProjectPayload) => await ipcRenderer.invoke('create-project', payload),
  getProjectById: async (id: string) => await ipcRenderer.invoke('get-project-by-id', id),
  getAllProjects: async () => await ipcRenderer.invoke('get-all-projects'),
  updateProject: async (id: string, updatedProject : Project) =>
    await ipcRenderer.invoke('update-project', id, updatedProject),
  deleteProject: async (id: string) => await ipcRenderer.invoke('delete-project', id)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('projects', PROJECTS)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = PROJECTS
}

