import { ReactNode } from "react";

export type CheckboxProps = {
  label?: string;
  defaultValue?: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  customIconUrl?: string;
  required?: boolean;
};

export type CheckboxGroupProps = {
  layout?: CheckboxLayoutType;
  label?: string;
  description?: string;
  children: ReactNode;
};

export type CheckboxLayoutType = "column" | "row";
