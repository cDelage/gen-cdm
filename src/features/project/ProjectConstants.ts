import { Node } from "reactflow";
import TableNode from "./TableNode";

export const NODES_TYPES = {
  table: TableNode,
};

export const TEST_NODES : Node[]= [
  {
    id: "1",
    type: "table",
    data: {
      name: "Members",
      fields: [
        {
          name: "memberId",
          type: "number",
          primaryKey: true,
          foreignKey: undefined,
        },
        {
          name: "name",
          type: "string",
          primaryKey: false,
          foreignKey: undefined,
        },
        {
          name: "contactInfo",
          type: "string",
          primaryKey: false,
          foreignKey: undefined,
        },
        {
          name: "membershipType",
          type: "string",
          primaryKey: false,
          foreignKey: undefined,
        },
      ],
    },
    position: { x: 0, y: 50 },
  },
];
