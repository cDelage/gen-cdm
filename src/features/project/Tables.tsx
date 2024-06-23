import styled from "styled-components";
import Loader from "./Loader";
import { useProjectById } from "./ProjectQueries";
import TableTab from "./TableTab";
import Table from "./Table";

const TablesStyled = styled.div`
  border: 1px solid var(--color-gray-300);
  height: var(--space-block);
  display: flex;
`;

const TablesListContainer = styled.div`
  width: 250px;
  border-right: 1px solid var(--color-gray-300);
  display: flex;
  flex-direction: column;
`;
function Tables() {
  const { project, isLoadingProject } = useProjectById();

  if (isLoadingProject) return <Loader />;
  if (!project) return null;

  const { model } = project;
  if (!model) return null;

  const { tables } = model;

  return (
    <TablesStyled>
      <TablesListContainer>
        {tables.map((table) => (
          <TableTab key={table._id} table={table} />
        ))}
      </TablesListContainer>
      <Table/>
    </TablesStyled>
  );
}

export default Tables;
