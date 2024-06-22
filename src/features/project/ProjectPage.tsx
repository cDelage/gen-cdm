import { PageColumn } from "../../ui/Page";
import Loader from "./Loader";
import { useProjectById, useRenameProject } from "./ProjectQueries";
import PromptProject from "./PromptProject";

function ProjectPage() {
  const { project, isLoadingProject } = useProjectById();
  const {renameProject} = useRenameProject();

  if (isLoadingProject) return <Loader />;
  if (!project) return null;
  const { _id, name } = project;

  if (!_id) return null;
  return (
    <PageColumn $gap="var(--space-medium)">
      <PromptProject />
      <input
        type="text"
        value={name}
        onChange={(e) =>
          renameProject({
            _id: _id ? _id : "",
            name: e.target.value,
            project,
          })
        }
      />
    </PageColumn>
  );
}

export default ProjectPage;
