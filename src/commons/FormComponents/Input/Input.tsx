import { useId } from "react";
import { Alert } from "../../../components/Icons/Alert";
import { Icon } from "../../../components/Icons/Icon";
import { Colors } from "../../Theme";
import {
  StyledInput,
  StyledInputError,
  StyledInputHelp,
  StyledInputLabel,
  StyledInputLeftIcon,
  StyledInputRightIcon,
  StyledInputWrapper,
  StyledRedSpan,
} from "./Input.style";
import { InputProps } from "./Input.types";
export const Input = ({
  value,
  onChange,
  placeholder,
  description,
  label,
  errorMessage,
  disabled,
  CustomIcon,
  required,
  type = "text",
}: InputProps) => {
  const inputId = useId();

  return (
    <StyledInputWrapper>
      {label && (
        <StyledInputLabel htmlFor={inputId}>
          {label}
          {required && <StyledRedSpan>*</StyledRedSpan>}
        </StyledInputLabel>
      )}
      <div style={{ position: "relative" }}>
        {CustomIcon && (
          <StyledInputLeftIcon>
            <Icon
              Icon={CustomIcon}
              width="16px"
              fill={disabled ? Colors.neutral200 : Colors.neutral900}
            />
          </StyledInputLeftIcon>
        )}
        <StyledInput
          id={inputId}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          $hasError={!!errorMessage}
          $hasIcon={!!CustomIcon}
          disabled={disabled}
          required={required}
          type={type}
        />
        {CustomIcon && (
          <StyledInputRightIcon>
            <Icon
              Icon={CustomIcon}
              width="16px"
              fill={disabled ? Colors.neutral200 : Colors.neutral900}
            />
          </StyledInputRightIcon>
        )}
      </div>
      {errorMessage && (
        <StyledInputError>
          <Icon Icon={Alert} width="16px" fill="currentColor" />
          {errorMessage}
        </StyledInputError>
      )}
      {description && !errorMessage && (
        <StyledInputHelp>{description}</StyledInputHelp>
      )}
    </StyledInputWrapper>
  );
};
