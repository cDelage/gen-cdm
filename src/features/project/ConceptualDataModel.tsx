import ReactFlow, { Background, BackgroundVariant, MiniMap } from "reactflow";
import styled from "styled-components";
import { NODES_TYPES, TEST_NODES } from "./ProjectConstants";

const ConceptualDataModelStyled = styled.div`
  border: 1px solid var(--color-border);
  flex-grow: 1;
`;

function ConceptualDataModel() {
  return (
    <ConceptualDataModelStyled>
      <ReactFlow
        nodes={TEST_NODES}
        edges={[]}
        nodeTypes={NODES_TYPES}
        snapToGrid={true}
        snapGrid={[8, 8]}
        fitView
        style={{
          width: "100%",
          height: "100%",
        }}
        panOnScroll
      >
        <MiniMap
          maskColor="rgba(226, 232, 240, 0.6)"
          offsetScale={10}
          pannable={true}
          inversePan={true}
        />
      </ReactFlow>
    </ConceptualDataModelStyled>
  );
}

export default ConceptualDataModel;
