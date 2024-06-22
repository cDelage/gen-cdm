import styled from "styled-components";
import { ICON_SIZE_MEDIUM, POSITION_BOTTOM_RIGHT } from "../../ui/UiConstants";
import { IoSettingsOutline } from "react-icons/io5";
import Tooltip from "../../ui/Tooltip";
import TooltipBodyStyled from "../../ui/TooltipBodyStyled";
import { Row } from "../../ui/Flexbox";
import { useUserSettingsStore } from "./UserSettingsStore";

const ParametersContainer = styled.div`
  position: absolute;
  right: var(--space-short);
  top: var(--space-short);
`;

function UserSettings() {
  const {token, setToken} = useUserSettingsStore();

  return (
    <ParametersContainer>
      <Tooltip>
        <>
          <Tooltip.TooltipButton>
            <button>
              <IoSettingsOutline size={ICON_SIZE_MEDIUM} />
            </button>
          </Tooltip.TooltipButton>
          <Tooltip.TooltipBody position={POSITION_BOTTOM_RIGHT} width="300px">
            <TooltipBodyStyled>
              <Row $gap="var(--space-short)">
                <span>Token : </span>
                <input type="password" value={token} onChange={(e) => setToken(e.target.value)}/>
              </Row>
            </TooltipBodyStyled>
          </Tooltip.TooltipBody>
        </>
      </Tooltip>
    </ParametersContainer>
  );
}

export default UserSettings;
