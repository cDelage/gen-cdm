import { Row } from "../../ui/Flexbox";
import { PromptArea } from "../../ui/PromptArea";
import { PROMPT_COLS, PROMPT_ROWS } from "../../ui/UiConstants";
import Loader from "./Loader";
import { useProjectById } from "./ProjectQueries";

function PromptProject() {
  const { project, isLoadingProject } = useProjectById();

  if (isLoadingProject) return <Loader />;
  if (!project) return null;

  const { prompt } = project;

  return (
    <Row $justify="center" $gap="var(--space-short)">
      <PromptArea
        rows={PROMPT_ROWS}
        cols={PROMPT_COLS}
        placeholder="Describe your system"
        disabled={true}
        value={prompt}
      />
    </Row>
  );
}

export default PromptProject;
