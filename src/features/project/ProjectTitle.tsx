import styled from "styled-components";
import {
  useProjectById,
  useUpdateProject,
  useUpdateProjectLocal,
} from "./ProjectQueries";
import Loader from "../../ui/Loader";

const InputTitle = styled.input`
  font-size: 2rem;
`;

function ProjectTitle() {
  const { project, isLoadingProject } = useProjectById();
  const { renameProject } = useUpdateProjectLocal();
  const { updateProject, isUpdatingProject } = useUpdateProject();
  if (isLoadingProject || isUpdatingProject) return <Loader />;
  if (!project) return null;

  const { _id, name } = project;

  return (
    <InputTitle
      type="text"
      value={name}
      onChange={(e) =>
        renameProject({
          _id: _id ? _id : "",
          name: e.target.value,
          project,
        })
      }
      onBlur={() => {
        updateProject({
          _id: _id ? _id : "",
          projectData: { name: project.name },
        });
      }}
    />
  );
}

export default ProjectTitle;
