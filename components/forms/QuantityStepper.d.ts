import React from 'react';

export interface QuantityStepperProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  /** @default "md" */
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

/** −/＋ quantity control with tabular mono count; used in cart lines. */
export function QuantityStepper(props: QuantityStepperProps): JSX.Element;
