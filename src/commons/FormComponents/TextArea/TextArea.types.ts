import { ChangeEvent, FC, InputHTMLAttributes } from "react";

export type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  description?: string;
  label?: string;
  errorMessage?: string;
  CustomIcon?: FC;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};
