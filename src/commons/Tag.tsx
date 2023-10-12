import { FC } from "react";
import styled from "styled-components";
import { Icon } from "../components/Icons/Icon";
import { Colors, Label } from "./Theme";

export const StyledTag = styled.button<{ disabled: boolean }>`
  display: flex;
  gap: 4px;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: ${Colors.blue50};
  color: ${Colors.neutral900};
  transition: all 0.3s;
  cursor: pointer;

  &:active {
    background-color: ${Colors.blue400};
    color: white;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0px 0px 0px 3px ${Colors.blue100};
  }

  &:disabled {
    background-color: ${Colors.neutral0};
    pointer-events: none;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${Colors.blue400};
      color: white;
    }
  }
`;

export const Tag = ({
  label,
  disabled = false,
  CustomIcon,
  iconPosition = "right",
}: TagProps) => {
  return (
    <StyledTag disabled={disabled}>
      {CustomIcon && iconPosition === "left" && (
        <Icon width="16px" fill="currentColor" Icon={CustomIcon} />
      )}
      <Label size="xs" $font="Work Sans" $weight={500} $uppercase>
        {label}
      </Label>
      {CustomIcon && iconPosition === "right" && (
        <Icon width="16px" fill="currentColor" Icon={CustomIcon} />
      )}
    </StyledTag>
  );
};

type TagProps = {
  label: string;
  disabled?: boolean;
  CustomIcon?: FC;
  iconPosition?: "left" | "right";
};
