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
}: InputProps) => {
  return (
    <StyledInputWrapper>
      {label && <StyledInputLabel>{label}</StyledInputLabel>}
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
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          $hasError={!!errorMessage}
          $hasIcon={!!CustomIcon}
          disabled={disabled}
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
