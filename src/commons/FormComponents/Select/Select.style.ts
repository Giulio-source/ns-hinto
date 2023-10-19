import styled, { css } from "styled-components";
import { StyledIcon } from "../../../components/Icons/Icon";
import { Theme } from "../../Section";
import { BodyS_Narrow_CSS, Colors } from "../../Theme";

export const StyledSelectIcon = styled.div`
  opacity: 1;
  position: absolute;
  top: 30px;
  right: 22px;
  transform: translate(0, -50%);
  pointer-events: none;
  z-index: 1;

  @media (hover: hover) {
    opacity: 0;
  }
`;

export const StyledSelect = styled.select<{
  $hasError: boolean;
  value: string | undefined;
  theme: Theme;
}>`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  appearance: none;

  width: 100%;
  cursor: pointer;
  outline: none;

  border: 2px solid
    ${({ $hasError }) => ($hasError ? Colors.magenta400 : Colors.neutral100)};
  color: ${Colors.neutral900};

  border-radius: 0;
  background: rgba(245, 245, 245, 0.5);
  backdrop-filter: blur(16px);
  transition: border-color 0.3s;

  ${BodyS_Narrow_CSS};

  &:focus,
  &:active,
  &:focus-visible {
    border-color: ${Colors.blue400};
    opacity: 1;

    & ~ ${StyledSelectIcon} {
      opacity: 1;
    }
  }

  ${({ value, $hasError }) =>
    value
      ? css`
          background: ${$hasError
            ? "rgba(245, 245, 245, 0.5)"
            : "rgba(237, 235, 255, 0.5)"};
          border-color: ${$hasError ? Colors.magenta400 : Colors.blue50};
          color: ${Colors.neutral900};
        `
      : css`
          color: ${Colors.neutral400};
        `};

  ${({ theme, value, $hasError, disabled }) =>
    theme === "dark" &&
    css`
      background-color: rgba(20, 20, 20, 0.5) !important;
      border-color: ${Colors.neutral600};

      ${StyledIcon} {
        fill: white;
      }

      ${value &&
      css`
        background: rgba(255, 255, 255, 0.1);
        border-color: ${Colors.neutral400};
        color: white;
        &:hover {
          border-color: ${Colors.neutral100};
        }
      `};

      ${$hasError &&
      css`
        background-color: rgba(20, 20, 20, 0.5);
        border-color: ${Colors.magenta400};
        &:hover {
          border-color: ${Colors.magenta400};
        }
      `}

      ${disabled &&
      css`
        background: rgba(255, 255, 255, 0.1);
        color: ${Colors.neutral600};
        cursor: default;
        border-color: transparent;

        &:hover {
          border-color: transparent;
        }

        ${StyledIcon} {
          svg {
            fill: ${Colors.neutral600};
          }
        }
      `};
    `};

  @media (hover: hover) {
    opacity: 0;
  }
`;

export const StyledSelectWrapper = styled.div``;

export const StyledCustomSelect = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @media (hover: hover) {
    display: block;
  }
`;

export const StyledCustomDropdown = styled.div`
  width: 100%;
  position: absolute;
  z-index: 3;
  top: calc(100% + 8px);
  max-height: 320px;
  overflow-y: auto;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08),
    0px 8px 16px 0px rgba(0, 0, 0, 0.04);
`;

export const StyledCustomDropdownItem = styled.div<{ $isSelected: boolean }>`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  color: ${Colors.neutral900};
  ${BodyS_Narrow_CSS}
  cursor: pointer;
  background-color: ${({ $isSelected }) =>
    $isSelected ? Colors.blue50 : Colors.neutral0};

  @media (hover: hover) {
    &:hover {
      background-color: ${Colors.blue50};
    }
  }

  ${StyledIcon} svg {
    fill: ${Colors.blue500};
  }
`;

export const StyledCustomDropdownLabel = styled.div<{
  $hasError: boolean;
  value: boolean;
  $showDropdown: boolean;
  disabled: boolean;
  theme: Theme;
}>`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;

  width: 100%;
  cursor: pointer;
  outline: none;

  color: ${Colors.neutral400};
  border: 2px solid ${Colors.neutral100};

  border-radius: 0;
  background: rgba(245, 245, 245, 0.5);
  backdrop-filter: blur(16px);
  transition: all 0.3s;

  ${BodyS_Narrow_CSS};

  &:hover {
    border-color: ${Colors.neutral200};
  }

  ${StyledIcon} {
    transition: transform 0.3s;
  }

  ${({ value }) =>
    value &&
    css`
      background: rgba(237, 235, 255, 0.5);
      border-color: ${Colors.blue50};          
      color: ${Colors.neutral900};
      &:hover {
        border-color: ${Colors.blue100};
      }
    `};

  ${({ $hasError }) =>
    $hasError &&
    css`
      background: rgba(245, 245, 245, 0.5);
      border-color: ${Colors.magenta400};
      &:hover {
        border-color: ${Colors.magenta400};
      }
    `}

  ${({ $showDropdown }) =>
    $showDropdown &&
    css`
      border-color: ${Colors.blue400};
      ${StyledIcon} {
        transform: rotate(-180deg);
      }
      &:hover {
        border-color: ${Colors.blue400};
      }
    `}
      
  ${({ disabled }) =>
    disabled &&
    css`
      background: rgba(224, 224, 224, 0.5);
      color: ${Colors.neutral200};
      cursor: default;
      border-color: transparent;

      &:hover {
        border-color: transparent;
      }
    `}

    ${({ theme, value, $showDropdown, $hasError, disabled }) =>
    theme === "dark" &&
    css`
      background-color: rgba(20, 20, 20, 0.5);
      border-color: ${Colors.neutral600};

      ${value &&
      css`
        background: rgba(255, 255, 255, 0.1);
        border-color: ${Colors.neutral400};
        color: white;
        &:hover {
          border-color: ${Colors.neutral100};
        }
      `};

      ${$hasError &&
      css`
        background-color: rgba(20, 20, 20, 0.5);
        border-color: ${Colors.magenta400};
        &:hover {
          border-color: ${Colors.magenta400};
        }
      `}

      ${$showDropdown &&
      css`
        border-color: ${Colors.blue400};
        &:hover {
          border-color: ${Colors.blue400};
        }
      `}

      ${disabled &&
      css`
        background: rgba(255, 255, 255, 0.1);
        color: ${Colors.neutral600};
        cursor: default;
        border-color: transparent;

        &:hover {
          border-color: transparent;
        }

        ${StyledIcon} {
          svg {
            fill: ${Colors.neutral600};
          }
        }
      `}
    `};
`;

export const StyledDropdownWrapper = styled.div<{ theme: Theme }>`
  position: relative;

  select:focus + ${StyledCustomSelect} {
    display: none;
  }

  ${({ theme }) =>
    theme === "dark" &&
    css`
      ${StyledIcon} {
        fill: white;
      }
    `};
`;
