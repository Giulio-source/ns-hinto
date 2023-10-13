import { useEffect, useId, useState } from "react";
import {
  StyledInputHelp,
  StyledInputLabel,
  StyledRedSpan,
} from "../Input/Input.style";
import {
  StyledCheckbox,
  StyledCheckboxGroup,
  StyledCheckboxLabel,
  StyledCheckboxWrapper,
  StyledSingleCheckboxWrapper,
} from "./Checkbox.style";
import { CheckboxGroupProps, CheckboxProps } from "./Checkbox.types";

export const Checkbox = ({
  label,
  disabled = false,
  defaultValue = false,
  onChange,
  customIconUrl,
  required = false,
}: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(defaultValue);
  const checkboxId = useId();

  useEffect(() => {
    onChange(checked);
  }, [checked]);

  return (
    <StyledSingleCheckboxWrapper>
      <StyledCheckbox
        id={checkboxId}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
        $customIconUrl={customIconUrl}
      />
      <StyledCheckboxLabel htmlFor={checkboxId} disabled={disabled}>
        {label}
        {required && <StyledRedSpan>*</StyledRedSpan>}
      </StyledCheckboxLabel>
    </StyledSingleCheckboxWrapper>
  );
};

export const CheckboxGroup = ({
  layout = "column",
  label,
  description,
  children,
}: CheckboxGroupProps) => {
  return (
    <StyledCheckboxGroup>
      {label && <StyledInputLabel>{label}</StyledInputLabel>}
      <StyledCheckboxWrapper $layout={layout}>{children}</StyledCheckboxWrapper>
      {description && <StyledInputHelp>{description}</StyledInputHelp>}
    </StyledCheckboxGroup>
  );
};
