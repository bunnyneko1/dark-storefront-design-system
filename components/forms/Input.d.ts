import React from 'react';

export interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hint?: string;
  error?: string;
  iconLeft?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Inset text field with uppercase label, brass focus ring, hint/error line. */
export function Input(props: InputProps): JSX.Element;
