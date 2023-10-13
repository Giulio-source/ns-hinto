import styled from "styled-components";
import { Colors } from "../../commons/Theme";
import { StyledIcon } from "../Icons/Icon";

export const StyledFilter = styled.div<{
  $maxHeight: number;
  $open: boolean;
  $showOverflow: boolean;
}>`
  width: 345px;
  border: 1px solid ${Colors.neutral900};
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px);
  cursor: pointer;
  transition: max-height 0.5s;
  max-height: ${({ $open, $maxHeight }) =>
    $open ? `${$maxHeight}px` : "58px"};
  overflow: ${({ $showOverflow }) => ($showOverflow ? "visible" : "hidden")};
`;

export const StyledFilterHeader = styled.button<{ $open: boolean }>`
  display: flex;
  color: ${Colors.neutral900};
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  width: 100%;
  background: white;
  border: none;
  cursor: pointer;

  &:focus-visible {
    outline-color: ${Colors.blue400};
  }

  ${StyledIcon} {
    transition: transform 0.3s;
    transform: rotate(${({ $open }) => ($open ? "-180deg" : "0deg")});
  }
`;

export const StyledFilterBody = styled.div`
  padding: 0 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
