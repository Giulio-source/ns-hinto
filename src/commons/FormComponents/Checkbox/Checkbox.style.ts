import styled, { css } from "styled-components";
import checkIcon from "../../../assets/icons/check.svg";
import { BodyS_Narrow_CSS, Colors } from "../../Theme";
import { CheckboxLayoutType } from "./Checkbox.types";

export const StyledCheckbox = styled.input<{
  $customIconUrl: string | undefined;
}>`
  &[type="checkbox"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    height: 16px;
    width: 16px;
    position: relative;
    border: 1px solid ${Colors.neutral200};
    cursor: pointer;
    transition: background-color 0.1s, border-color 0.1s;
    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: 0px 0px 0px 3px ${Colors.blue100};
    }
    &::before {
      content: url(${({ $customIconUrl }) => $customIconUrl || checkIcon});
      height: 16px;
      width: 16px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
    &:checked::before {
      opacity: 1;
    }
    &:hover {
      border-color: ${Colors.neutral200};
      background-color: ${Colors.neutral100};
    }
    &:checked {
      border-color: ${Colors.blue400};
      background-color: ${Colors.blue400};
      &:hover {
        border-color: ${Colors.blue600};
        background-color: ${Colors.blue600};
      }
    }
    ${({ disabled }) =>
      disabled &&
      css`
        background-color: ${Colors.neutral50};
        border-color: ${Colors.neutral100};
        cursor: default;
        &:hover {
          border-color: ${Colors.neutral100};
          background-color: ${Colors.neutral50};
        }
        &:checked {
          border-color: ${Colors.neutral300};
          background-color: ${Colors.neutral300};
          &::before {
            opacity: 0.6;
          }
          &:hover {
            border-color: ${Colors.neutral300};
            background-color: ${Colors.neutral300};
          }
        }
      `};
  }
`;

export const StyledSingleCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledCheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledCheckboxWrapper = styled.div<{
  $layout: CheckboxLayoutType;
}>`
  display: flex;
  flex-direction: ${({ $layout }) => ($layout === "row" ? "row" : "column")};
  gap: ${({ $layout }) => ($layout === "row" ? "24px" : "8px ")};
  flex-wrap: wrap;
`;

export const StyledCheckboxLabel = styled.label<{ disabled: boolean }>`
  ${BodyS_Narrow_CSS};
  color: ${Colors.neutral900};
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${Colors.neutral300};
      cursor: default;
    `}
`;
