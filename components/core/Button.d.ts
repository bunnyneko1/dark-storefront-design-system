import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'ember' | 'outline' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Primary call-to-action for the Ember storefront — uppercase, tracked, brass-filled.
 * @startingPoint section="Core" subtitle="Brass / ember / outline / ghost actions" viewport="700x200"
 */
export function Button(props: ButtonProps): JSX.Element;
