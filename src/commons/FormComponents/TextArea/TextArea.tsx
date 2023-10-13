import { useId } from "react";
import { Alert } from "../../../components/Icons/Alert";
import { Icon } from "../../../components/Icons/Icon";
import {
  StyledInputError,
  StyledInputHelp,
  StyledInputLabel,
  StyledRedSpan,
} from "../Input/Input.style";
import {
  StyledTextArea,
  StyledTextAreaFooter,
  StyledTextAreaWrapper,
} from "./TextArea.style";
import { TextAreaProps } from "./TextArea.types";
export const TextArea = ({
  value,
  onChange,
  label,
  errorMessage,
  description,
  maxLength = 150,
  placeholder,
  disabled,
  required,
}: TextAreaProps) => {
  const textareaId = useId();
  return (
    <StyledTextAreaWrapper>
      {label && (
        <StyledInputLabel htmlFor={textareaId}>
          {label}
          {required && <StyledRedSpan>*</StyledRedSpan>}
        </StyledInputLabel>
      )}
      <StyledTextArea
        id={textareaId}
        name={textareaId}
        value={value}
        onChange={onChange}
        rows={3}
        maxLength={maxLength}
        placeholder={placeholder}
        $hasError={!!errorMessage}
        disabled={disabled}
        required={required}
      />
      {errorMessage && (
        <StyledInputError>
          <Icon Icon={Alert} width="16px" fill="currentColor" />
          {errorMessage}
        </StyledInputError>
      )}
      {!errorMessage && (
        <StyledTextAreaFooter>
          {description ? (
            <StyledInputHelp>{description}</StyledInputHelp>
          ) : (
            <div />
          )}
          <StyledInputHelp>
            {value?.length ?? 0}/{maxLength}
          </StyledInputHelp>
        </StyledTextAreaFooter>
      )}
    </StyledTextAreaWrapper>
  );
};
