import styled from "styled-components";
import { useFindActiveTableByParam } from "../project/ProjectQueries";

const TableStyled = styled.div`
  padding: var(--space-short);
  display: flex;
  flex-direction: column;
  gap: var(--space-short);

  table {
    width: 100%;
    border-collapse: collapse;
  }

  table,
  th,
  td {
    border: 1px solid var(--color-gray-300);
  }

  th,
  td {
    padding: 10px;
    text-align: left;
  }
`;

function Table() {
  const { table } = useFindActiveTableByParam();

  if (!table) return null;
  const { name, fields } = table;

  return (
    <TableStyled>
      <div>
        Table : {name}
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => (
            <tr key={field._id}>
              <td>{field.name}</td>
              <td>{field.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableStyled>
  );
}

export default Table;
