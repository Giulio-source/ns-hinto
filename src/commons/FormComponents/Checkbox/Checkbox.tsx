import { useEffect, useState } from "react";
import { StyledInputHelp, StyledInputLabel } from "../Input/Input.style";
import {
  StyledCheckbox,
  StyledCheckboxGroup,
  StyledCheckboxLabel,
  StyledCheckboxWrapper,
  StyledSingleCheckboxWrapper,
} from "./Checkbox.style";
import { CheckboxGroupProps, CheckboxProps } from "./Checkbox.types";

export const Checkbox = ({
  id,
  label,
  disabled = false,
  defaultValue = false,
  onChange,
  customIconUrl,
}: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(defaultValue);

  useEffect(() => {
    onChange(checked);
  }, [checked]);

  return (
    <StyledSingleCheckboxWrapper>
      <StyledCheckbox
        id={id}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
        $customIconUrl={customIconUrl}
      />
      <StyledCheckboxLabel htmlFor={id} disabled={disabled}>
        {label}
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
