import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  CreateProjectPayload,
  Project,
} from "../../../electron/types/Project.type";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Table } from "../../../electron/types/Model.type";

export function useGetAllProjects() {
  const { data: projects, isLoading: isLoadingProjects } = useQuery({
    queryKey: ["projects"],
    queryFn: window.projects.getAllProjects,
  });

  return {
    projects,
    isLoadingProjects,
  };
}

export function useCreateProject() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: createProject, isPending: isCreatingProject } = useMutation({
    mutationFn: (payload: CreateProjectPayload) =>
      window.projects.createProject(payload),
    onError: (err) => {
      console.error(err);
    },
    onSuccess: (project: Project) => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.setQueryData(["project", project._id], project);
      navigate(`/${project._id}`);
    },
  });

  return { createProject, isCreatingProject };
}

export function useProjectById() {
  const { projectId } = useParams() as { projectId: string };
  const { data: project, isLoading: isLoadingProject } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => window.projects.getProjectById(projectId),
  });

  return { project, isLoadingProject };
}

/**
 * Update the project without save in database
 * @returns
 */
export function useUpdateProjectLocal() {
  const queryClient = useQueryClient();

  const renameProject = ({
    _id,
    name,
    project,
  }: {
    _id: string;
    name: string;
    project: Project;
  }) => {
    queryClient.setQueryData(["project", _id], {
      ...project,
      name,
    });
  };

  return { renameProject };
}

export function useUpdateProject() {
  const queryClient = useQueryClient();

  const { mutate: updateProject, isPending: isUpdatingProject } = useMutation({
    mutationFn: ({
      _id,
      projectData,
    }: {
      _id: string;
      projectData: Partial<Project>;
    }) => window.projects.updateProject(_id, projectData),
    onError: (err) => {
      console.error(err);
    },
    onSuccess: (_id) => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["project", _id] });
    },
  });

  return { updateProject, isUpdatingProject };
}

export function useFindActiveTableByParam(): { table?: Table } {
  const [searchParams] = useSearchParams();
  const tableId = searchParams.get("tableId");
  const { project } = useProjectById();

  if (!project || !project.model?.tables) return { table: undefined };
  const table = project.model.tables.find((table) => table._id === tableId);

  return { table: table ? table : project.model.tables[0] };
}
