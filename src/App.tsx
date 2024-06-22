import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Router } from "electron-router-dom";
import { Model } from "../electron/types/Model.type";
import { CreateProjectPayload, Project } from "../electron/types/Project.type";
import GlobalStyle from "./GlobalStyle";
import AppLayout from "./ui/AppLayout";
import EmptyProjectPage from "./features/project/EmptyProjectPage";
import ProjectPage from "./features/project/ProjectPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

declare global {
  interface Window {
    projects: {
      postPrompt: (prompt: string) => Promise<Model>;
      createProject: (payload : CreateProjectPayload) => Promise<Project>;
      getProjectById: (id: string) => Promise<Project>;
      updateProject: (
        id: string,
        updatedProject: Project
      ) => Promise<Partial<Project>>;
      deleteProject: (id: string) => Promise<number>;
      getAllProjects: () => Promise<Project[]>;
    };
  }
}

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <Router
        main={
          <>
            <Route
              path="/"
              element={<AppLayout />}
              children={
                <>
                  <Route path="/" element={<EmptyProjectPage/>}/>
                  <Route path="/:projectId" element={<ProjectPage/>}/>
                </>
              }
            />
          </>
        }
      />
    </QueryClientProvider>
  );
}

export default App;
