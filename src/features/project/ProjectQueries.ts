import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  CreateProjectPayload,
  Project,
} from "../../../electron/types/Project.type";
import { useNavigate, useParams } from "react-router-dom";

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

export function useRenameProject() {
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
