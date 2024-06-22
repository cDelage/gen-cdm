import styled from "styled-components";
import IconGray from "../../ui/IconGray";
import Prompt from "./Prompt";
import { Column } from "../../ui/Flexbox";

const EmptyProjectStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--space-medium);
  box-sizing: border-box;
`;

const IconContainer = styled.div`
  height: var(--icon-large);
`;

function EmptyProjectPage() {
  return (
    <EmptyProjectStyled>
      <Column $grow={1} $justify="center" $align="center">
        <IconContainer>
          <IconGray />
        </IconContainer>
      </Column>
      <Prompt />
    </EmptyProjectStyled>
  );
}

export default EmptyProjectPage;
