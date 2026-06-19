import React from 'react';

export interface IconButtonProps {
  /** The icon node (e.g. a Lucide <i data-lucide> or svg). */
  children?: React.ReactNode;
  /** @default "ghost" */
  variant?: 'ghost' | 'solid' | 'gold';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** @default "square" */
  shape?: 'square' | 'circle';
  disabled?: boolean;
  /** Optional count badge (e.g. cart quantity). */
  badge?: React.ReactNode;
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Icon-only control for nav actions — search, account, cart (with count badge). */
export function IconButton(props: IconButtonProps): JSX.Element;
