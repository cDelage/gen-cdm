import { PageColumn } from "../../ui/Page";
import ConceptualDataModel from "./ConceptualDataModel";
import ProjectTitle from "./ProjectTitle";
import PromptProject from "./PromptProject";
import Tables from "./Tables";

function ProjectPage() {
  return (
    <PageColumn $gap="var(--space-medium)">
      <PromptProject />
      <ProjectTitle />
      <Tables />
      <ConceptualDataModel />
    </PageColumn>
  );
}

export default ProjectPage;
