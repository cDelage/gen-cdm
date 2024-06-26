import styled, { css } from "styled-components";
import { Column } from "../../ui/Flexbox";
import Loader from "../../ui/Loader";
import { useGetAllProjects } from "./ProjectQueries";
import { useNavigate, useParams } from "react-router-dom";

const ProjectTab = styled.div<{ $active: boolean }>`
  padding: var(--space-short);
  cursor: pointer;
  &:hover {
    background-color: var(--color-hover);
  }

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-active);
    `}
`;

function ProjectNavigation() {
  const { projects, isLoadingProjects } = useGetAllProjects();
  const navigate = useNavigate();
  const { projectId : activeProjectId} = useParams();
  if (isLoadingProjects) return <Loader />;

  return (
    <div>
      <Column>
        {projects?.map((project) => (
          <ProjectTab
            key={project._id}
            onClick={() => navigate(`/${project._id}`)}
            $active={project._id === activeProjectId}
          >
            {project.name}
          </ProjectTab>
        ))}
      </Column>
    </div>
  );
}

export default ProjectNavigation;
