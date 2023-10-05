import { FC, InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  helpText?: string;
  label?: string;
  errorMessage?: string;
  CustomIcon?: FC;
  value?: string
  onChange?: () => void
};
