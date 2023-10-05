import styled from "styled-components";
import { BodyS_Narrow_CSS, Colors } from "../../Theme";

export const StyledTextArea = styled.textarea<{
  $hasError: boolean;
}>`
  padding: 16px 20px;
  border: 2px solid
    ${({ $hasError }) => ($hasError ? Colors.magenta400 : Colors.neutral100)};
  color: ${Colors.neutral900};

  border-radius: 0;
  background: rgba(245, 245, 245, 0.5);
  backdrop-filter: blur(16px);
  outline: none;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;

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

export const StyledTextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTextAreaFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
