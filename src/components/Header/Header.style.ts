import styled from "styled-components";
import { Colors } from "../../commons/Theme";

export const StyledHeader = styled.header`
  position: fixed;
  min-height: 68px;
  width: 100%;
  top: 0px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  z-index: 1;
  color: ${Colors.neutral900};
  display: flex;
  align-items: center;
`;
