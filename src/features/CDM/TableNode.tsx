import styled from "styled-components";
import { Table } from "../../../electron/types/Model.type";
import { Handle, Position } from "reactflow";

const TableContainer = styled.div<{$selected : boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  border: ${(props) => props.$selected ? '2px solid var(--color-gray-500)': '1px solid var(--color-border)'};

`;

const TableStyled = styled.table`
  padding: var(--space-short);
  background-color: white;
`;

const TableTitle = styled.div`
  padding: var(--space-short);
  background-color: var(--color-background);
`;

function TableNode({ data, selected }: { data: Table, selected: boolean }) {
  const { fields, name } = data;

  return (
    <TableContainer $selected={selected}>
      <TableTitle>{name}</TableTitle>
      <TableStyled>
        <tbody>
          {fields.map((field) => (
            <tr key={field._id}>
              <td>{field.name}</td>
              <td>{field.type}</td>
            </tr>
          ))}
        </tbody>
      </TableStyled>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        isConnectable={true}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        isConnectable={true}
      />
    </TableContainer>
  );
}

export default TableNode;
