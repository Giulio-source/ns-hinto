import { FC, InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  description?: string;
  label?: string;
  errorMessage?: string;
  CustomIcon?: FC;
  value?: string;
};
