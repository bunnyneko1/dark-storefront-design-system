import React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  selected?: boolean;
  selectable?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Pill-shaped filter chip / category tag; brass fill when selected. */
export function Tag(props: TagProps): JSX.Element;
