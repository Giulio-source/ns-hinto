import { FC } from "react";
import { Theme } from "../../Section";

export type SelectProps = {
  description?: string;
  label?: string;
  errorMessage?: string;
  CustomIcon?: FC;
  value?: string;
  onChange?: (value: string) => void;
  options: string[];
  disabled?: boolean;
  theme?: Theme;
  required?: boolean;
};
