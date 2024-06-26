import { useParams } from "react-router-dom";
import { PageColumn } from "../../ui/Page";
import Tabs, { Tab } from "../../ui/Tabs";
import CDMContainer from "../CDM/CDMContainer";
import ProjectTitle from "./ProjectTitle";
import PromptProject from "./PromptProject";
import Tables from "../tables/Tables";

const CDM_TABS: Tab[] = [
  {
    id: "cdm",
    children: <>Conceptual Data Model</>,
  },
  {
    id: "tables",
    children: <>Tables list</>,
  },
];

function ProjectPage() {

  const {projectId} = useParams();

  return (
    <PageColumn $gap="var(--space-medium)" key={projectId}>
      <PromptProject />
      <ProjectTitle />
      <Tabs tabs={CDM_TABS}>
        <Tabs.Window id="cdm">
          <CDMContainer />
        </Tabs.Window>
        <Tabs.Window id="tables">
          <Tables/>
        </Tabs.Window>
      </Tabs>
    </PageColumn>
  );
}

export default ProjectPage;
