import styled from "styled-components";
import { Theme } from "../../Section";
import { BodyS_Narrow_CSS, Colors, LabelS_CSS } from "../../Theme";

export const StyledInput = styled.input<{
  $hasError: boolean;
  $hasIcon: boolean;
}>`
  width: 100%;
  padding: ${({ $hasIcon }) => ($hasIcon ? "16px 44px" : "16px 20px")};
  border: 2px solid
    ${({ $hasError }) => ($hasError ? Colors.magenta400 : Colors.neutral100)};
  color: ${Colors.neutral900};

  border-radius: 0;
  background: rgba(245, 245, 245, 0.5);
  backdrop-filter: blur(16px);
  outline: none;
  transition: all 0.3s;

  ${BodyS_Narrow_CSS};

  &:focus,
  &:active,
  &:focus-visible {
    border-color: ${Colors.blue400};
  }

  &::placeholder {
    color: ${Colors.neutral400};
  }

  &:not(:placeholder-shown):not(:active, :focus, :focus-visible) {
    background: ${({ $hasError }) =>
      $hasError ? "rgba(245, 245, 245, 0.5)" : "rgba(237, 235, 255, 0.5)"};
    border-color: ${({ $hasError }) =>
      $hasError ? Colors.magenta400 : Colors.blue50};
  }

  &:hover {
    &:placeholder-shown:not(:active, :focus, :focus-visible, :disabled) {
      border-color: ${({ $hasError }) =>
        $hasError ? Colors.magenta400 : Colors.neutral200};
    }
    &:not(:placeholder-shown):not(:active, :focus, :focus-visible, :disabled) {
      border-color: ${({ $hasError }) =>
        $hasError ? Colors.magenta400 : Colors.blue100};
    }
  }

  &:disabled {
    background: rgba(224, 224, 224, 0.5);
    color: ${Colors.neutral200};
    &::placeholder {
      color: ${Colors.neutral200};
    }
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInputHelp = styled.div<{ theme: Theme }>`
  margin-top: 4px;
  color: ${({ theme = "light" }) =>
    theme === "dark" ? Colors.neutral200 : Colors.neutral400};
  ${BodyS_Narrow_CSS};
`;

export const StyledInputError = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-top: 4px;
  color: ${Colors.magenta400};
  ${BodyS_Narrow_CSS};
  font-weight: 600;
`;

export const StyledInputLabel = styled.label`
  margin-bottom: 8px;
  text-transform: uppercase;
  ${LabelS_CSS};
`;

export const StyledInputLeftIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  z-index: 1;
  transform: translate(0, -50%);
`;
export const StyledInputRightIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  z-index: 1;
  transform: translate(0, -50%);
`;

export const StyledRedSpan = styled.span`
  color: ${Colors.magenta400};
`;
