import styled, { css } from "styled-components";
import { Table } from "../../../electron/types/Model.type";
import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";
import { useFindActiveTableByParam } from "../project/ProjectQueries";

const TableTabStyled = styled.div<{ $active: boolean }>`
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

function TableTab({ table }: { table: Table }) {
  const { table: activeTable } = useFindActiveTableByParam();
  const { name, _id } = table;
  const [, setSearchParams] = useSearchParams();
  const openTable = useCallback(() => {
    if (_id) {
      setSearchParams({ tableId: _id });
    }
  }, [_id, setSearchParams]);

  return (
    <TableTabStyled
      $active={_id !== undefined && activeTable?._id === _id}
      onClick={openTable}
    >
      {name}
    </TableTabStyled>
  );
}

export default TableTab;
