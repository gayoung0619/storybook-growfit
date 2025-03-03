import React from 'react';

import './button.css';

export interface ButtonProps {
  backgroundColor?: string;
  size?: 'Full' | 'Large' | 'Small' | 'Xsmall';
  disabled?: boolean;
  borderR: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  size = 'Small',
  backgroundColor,
 disabled,
  borderR,
  label,
  ...props
}: ButtonProps) => {
  const borderRClass = borderR ? 'storybook-button--borderR' : ''
  const disabledClass = disabled ? 'storybook-button--disabled' : ''
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, borderRClass, disabledClass].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
