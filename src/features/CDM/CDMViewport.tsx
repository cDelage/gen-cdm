import ReactFlow, {
  Background,
  BackgroundVariant,
  MiniMap,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { NODES_TYPES } from "../project/ProjectConstants";
import "reactflow/dist/base.css";
import { useTablesAsNodes } from "./CDMService";
import { NodePositions, getPositions } from "./PositionService";
import { useEffect } from "react";

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

/**
 * CDM = Conceptual data model.
 * This component display the CDM based on the data from tables
 *
 * @returns Viewport of conceptual data model
 */
function CDMViewport() {
  const { nodes: nodesFromTable, edges: edgesFromRelations } =
    useTablesAsNodes();

  const [nodes, setNodes, onNodesChange] = useNodesState(nodesFromTable);
  const [edges, _setEdges, onEdgesChange] = useEdgesState(edgesFromRelations);

  useEffect(() => {
    if (
      nodes &&
      !nodes.find((node) => node.position.x != 0 && node.position.y != 0)
    ) {
      const positions = getPositions(nodes, edges);
      setNodes(
        nodes.map((node) => {
          const pos: NodePositions | undefined = positions.find(
            (pos) => pos.id === node.id
          );
          return {
            ...node,
            position: {
              x: pos ? pos.x : 0,
              y: pos ? pos.y : 0,
            },
          };
        })
      );
    }
  }, [nodes]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={NODES_TYPES}
      snapToGrid={true}
      snapGrid={[8, 8]}
      defaultViewport={defaultViewport}
      fitView
      style={{
        width: "100%",
        height: "100%",
      }}
      panOnScroll
    >
      <>
        <MiniMap
          maskColor="rgba(226, 232, 240, 0.6)"
          offsetScale={10}
          pannable={true}
          inversePan={true}
        />
        <Background variant={"lines" as BackgroundVariant} gap={8} />
      </>
    </ReactFlow>
  );
}

export default CDMViewport;
