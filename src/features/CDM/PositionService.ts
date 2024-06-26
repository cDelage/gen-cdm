import * as d3 from "d3";
import { Table } from "../../../electron/types/Model.type";
import { Node as ReactFlowNode, Edge } from "reactflow";

// 1. Initialiser les données
interface Node {
  id: string;
  width: number;
  height: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
}

interface Link {
  source: string | Node;
  target: string | Node;
}

export type NodePositions = {
    id: string;
    x: number;
    y: number;
}

export function getPositions(nodesFlow: ReactFlowNode<Table>[], edges: Edge[], tickCount: number = 300) : NodePositions[] {
  const nodes: Node[] = nodesFlow.map((node) => {
    return {
      id: node.id,
      width: 400,
      height: 400,
    };
  });

  const links: Link[] = edges.map((edge) => {
    return {
      source: edge.source,
      target: edge.target,
    };
  });

  // 2. Créer la simulation
  const simulation = d3
    .forceSimulation<Node>(nodes)
    .force(
      "link",
      d3
        .forceLink<Node, Link>(links)
        .id((d) => d.id)
        .distance(200)
    )
    .force("charge", d3.forceManyBody().strength(0))
    .force("center", d3.forceCenter(200, 200))
    .force(
      "collision",
      d3
        .forceCollide<Node>()
        .radius((d) => Math.max(d.width, d.height) / 2 + 10)
    );

  // 3. Avancer manuellement la simulation pour un certain nombre de ticks
  for (let i = 0; i < tickCount; i++) {
    simulation.tick();
  }

  // 4. Récupérer les positions des nœuds
  return nodes.map(node => ({
    id: node.id,
    x: node.x ? Math.round(node.x / 8) * 8 : 0,
    y: node.y ? Math.round(node.y / 8) * 8 : 0,
  }));
}
