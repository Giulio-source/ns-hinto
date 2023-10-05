import { ChangeEvent, FC, InputHTMLAttributes } from "react";

export type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  helpText?: string;
  label?: string;
  errorMessage?: string;
  CustomIcon?: FC;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};
