import { useMemo } from "react";
import styled, { css } from "styled-components";
import { Icon } from "../../components/Icons/Icon";
import { Theme } from "../Section";
import { Colors, Flex } from "../Theme";

export const StyledButton = styled.button<StyledButtonProps & { as: string }>`
  width: fit-content;
  border-radius: 0;
  border: none;
  font-family: "Gilroy", sans-serif;
  font-weight: 600;
  padding: ${({ $padding }) => $padding};
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;

  &:focus-visible {
    outline: none;
    box-shadow: 0px 0px 0px 3px ${Colors.blue100};
  }

  ${({ size }) => {
    if (size === "s") {
      return css`
        font-size: 16px;
        line-height: 20px;
      `;
    }
    if (size === "m") {
      return css`
        font-size: 18px;
        line-height: 24px;
      `;
    }
  }}

  ${({ theme, type }) => {
    if (theme === "light") {
      if (type === "secondary") {
        return css`
          color: ${Colors.neutral900};
          border: 1px solid ${Colors.neutral900};
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          &:disabled {
            color: ${Colors.neutral200};
            border-color: ${Colors.neutral100};
            cursor: default;
          }
          &:not(:disabled):active {
            color: ${Colors.neutral0};
            background-color: ${Colors.blue400};
            border-color: ${Colors.blue400};
            outline: none;
          }
          @media (hover: hover) {
            &:not(:disabled):hover {
              color: ${Colors.neutral0};
              background-color: ${Colors.blue400};
              border-color: ${Colors.blue400};
            }
          }
        `;
      }
      if (type === "ghost") {
        return css`
          color: ${Colors.neutral900};
          background: none;
          &:disabled {
            color: ${Colors.neutral200};
            cursor: default;
          }
          &:not(:disabled):active {
            color: ${Colors.blue400};
            outline: none;
          }
          @media (hover: hover) {
            &:not(:disabled):hover {
              color: ${Colors.blue400};
            }
          }
        `;
      }
      return css`
        color: ${Colors.neutral0};
        background-color: ${Colors.neutral900};
        &:disabled {
          color: ${Colors.neutral600};
          background-color: ${Colors.neutral800};
          cursor: default;
        }
        &:not(:disabled):active {
          background-color: ${Colors.blue400};
          outline: none;
        }
        @media (hover: hover) {
          &:not(:disabled):hover {
            background-color: ${Colors.blue400};
          }
        }
      `;
    }
    if (theme === "dark") {
      if (type === "secondary") {
        return css`
          color: ${Colors.neutral0};
          border: 1px solid ${Colors.neutral0};
          background: rgba(10, 10, 10, 0.5);
          &:disabled {
            color: ${Colors.neutral600};
            border-color: ${Colors.neutral600};
            cursor: default;
          }
          &:not(:disabled):active {
            color: ${Colors.neutral0};
            background-color: ${Colors.blue400};
            border-color: ${Colors.blue400};
            outline: none;
          }
          @media (hover: hover) {
            &:not(:disabled):hover {
              color: ${Colors.neutral0};
              background-color: ${Colors.blue400};
              border-color: ${Colors.blue400};
            }
          }
        `;
      }
      if (type === "ghost") {
        return css`
          color: ${Colors.neutral0};
          background: none;
          &:disabled {
            color: ${Colors.neutral600};
            cursor: default;
          }
          &:not(:disabled):active {
            color: ${Colors.blue100};
            outline: none;
          }
          @media (hover: hover) {
            &:not(:disabled):hover {
              color: ${Colors.blue100};
            }
          }
        `;
      }
      return css`
        color: ${Colors.neutral900};
        background-color: ${Colors.neutral0};
        &:disabled {
          color: ${Colors.neutral200};
          background-color: ${Colors.neutral100};
          cursor: default;
        }
        &:not(:disabled):active {
          color: ${Colors.neutral0};
          background-color: ${Colors.blue400};
          outline: none;
        }
        @media (hover: hover) {
          &:not(:disabled):hover {
            color: ${Colors.neutral0};
            background-color: ${Colors.blue400};
          }
        }
      `;
    }
  }};
`;

export const Button = ({
  type = "primary",
  label,
  theme = "light",
  disabled,
  size = "m",
  iconPosition = "right",
  CustomIcon,
  onClick,
  href,
}: ButtonProps) => {
  const uxPadding = useMemo(() => {
    if (type === "ghost") return "0";
    if (!label && size === "s") return "14px";
    if (!label && size === "m") return "16px";
    if (!CustomIcon && size === "s") return "12px 24px";
    if (!CustomIcon && size === "m") return "16px 32px";
    if (iconPosition === "left" && size === "s") return "12px 24px 12px 20px";
    if (iconPosition === "left" && size === "m") return "16px 32px 16px 28px";
    if (iconPosition === "right" && size === "s") return "12px 20px 12px 24px";
    if (iconPosition === "right" && size === "m") return "16px 28px 16px 32px";
    return "16px 32px";
  }, [label, size, CustomIcon, iconPosition, type]);

  return (
    <StyledButton
      theme={theme}
      type={type}
      disabled={disabled}
      size={size}
      $padding={uxPadding}
      onClick={onClick}
      href={href}
      as={href ? "a" : "button"}
    >
      <Flex $gap={8}>
        {CustomIcon && iconPosition === "left" && (
          <Icon
            Icon={CustomIcon}
            width={size === "s" ? "16px" : "24px"}
            fill="currentColor"
          />
        )}
        {label}
        {CustomIcon && iconPosition === "right" && (
          <Icon
            Icon={CustomIcon}
            width={size === "s" ? "16px" : "24px"}
            fill="currentColor"
          />
        )}
      </Flex>
    </StyledButton>
  );
};

type StyledButtonProps = ButtonProps & {
  $padding: string;
};

type ButtonProps = {
  type?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  href?: string;
  size?: "m" | "s";
  theme?: Theme;
  label?: string;
  disabled?: boolean;
  CustomIcon?: React.FC;
  iconPosition?: "left" | "right";
};
