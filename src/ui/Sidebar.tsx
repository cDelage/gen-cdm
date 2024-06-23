import styled from "styled-components";
import { Row } from "./Flexbox";
import { IoMenuOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { ICON_SIZE_MEDIUM } from "./UiConstants";
import { useNavigate } from "react-router-dom";
import ProjectNavigation from "../features/project/ProjectNavigation";

const SidebarStyled = styled.aside`
  width: 300px;
  border-right: 1px solid var(--color-border);
  background-color: var(--color-background);
  padding: 8px 0px;
  display: flex;
  flex-direction: column;
  gap: var(--space-short);
`;

function Sidebar() {
  const navigate = useNavigate();
  return (
    <SidebarStyled>
      <Row $justify="space-between" $align="center" $padding="0px 8px">
        <button>
          <IoMenuOutline size={ICON_SIZE_MEDIUM} />
        </button>
        <button onClick={() => navigate("/")}>
          <IoCreateOutline size={ICON_SIZE_MEDIUM} />
        </button>
      </Row>
      <ProjectNavigation/>
    </SidebarStyled>
  );
}

export default Sidebar;
