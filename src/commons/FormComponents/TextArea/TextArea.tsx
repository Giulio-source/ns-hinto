import { Alert } from "../../../components/Icons/Alert";
import { Icon } from "../../../components/Icons/Icon";
import {
  StyledInputError,
  StyledInputHelp,
  StyledInputLabel,
} from "../Input/Input.style";
import {
  StyledTextArea,
  StyledTextAreaFooter,
  StyledTextAreaWrapper,
} from "./TextArea.style";
import { TextAreaProps } from "./TextArea.types";
export const TextArea = ({
  id,
  value,
  onChange,
  label,
  errorMessage,
  helpText,
  maxLength = 150,
  placeholder,
  disabled,
}: TextAreaProps) => {
  return (
    <StyledTextAreaWrapper>
      {label && <StyledInputLabel htmlFor={id}>{label}</StyledInputLabel>}
      <StyledTextArea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        rows={3}
        maxLength={maxLength}
        placeholder={placeholder}
        $hasError={!!errorMessage}
        disabled={disabled}
      />
      {errorMessage && (
        <StyledInputError>
          <Icon Icon={Alert} width="16px" fill="currentColor" />
          {errorMessage}
        </StyledInputError>
      )}
      {!errorMessage && (
        <StyledTextAreaFooter>
          {helpText ? <StyledInputHelp>{helpText}</StyledInputHelp> : <div />}
          <StyledInputHelp>
            {value?.length ?? 0}/{maxLength}
          </StyledInputHelp>
        </StyledTextAreaFooter>
      )}
    </StyledTextAreaWrapper>
  );
};
