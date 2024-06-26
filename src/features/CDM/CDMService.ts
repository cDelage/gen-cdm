import { useMemo } from "react";
import { useProjectById } from "../project/ProjectQueries";
import { Relation, Table } from "../../../electron/types/Model.type";
import { Edge, Node } from "reactflow";

export function useTablesAsNodes() {
  const { project } = useProjectById();

  const nodes: Node<Table>[] = useMemo(() => {
    return project && project.model
      ? project.model.tables.map((table) => {
          return {
            id: table._id,
            data: table,
            type: "table",
            position: {
              x: table.posX ? table.posX : 0,
              y: table.posY ? table.posY : 0,
            },
          } as Node<Table>;
        })
      : [];
  }, [project]);

  const edges: Edge<Relation>[] = useMemo(() => {
    return project && project.model
      ? project.model.relations.map((relation) => {
          return {
            id: relation._id,
            source: relation.parentEntity.tableId,
            sourceHandle: "a",
            target: relation.childEntity.tableId,
            targetHandle: "b",
            data: relation,
          } as Edge<Relation>;
        })
      : [];
  }, [project]);

  return { nodes, edges };
}
