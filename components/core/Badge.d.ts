import React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "neutral" */
  tone?: 'neutral' | 'gold' | 'ember' | 'instock' | 'low' | 'out';
  /** @default "soft" */
  variant?: 'soft' | 'solid';
  style?: React.CSSProperties;
}

/** Tiny uppercase status pill — stock state, "New", "Limited". */
export function Badge(props: BadgeProps): JSX.Element;
