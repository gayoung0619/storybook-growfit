import React from 'react';

import './button.css';

export interface BadgeProps {
  size?: 'Large' | 'Small';
  backgroundColor?: string;
  color: string;
  label: string;
  border: boolean;
  onClick?: () => void;
}

export const Badge = ({
  size = 'Small',
  backgroundColor,
  color,
  label,
  border,
  ...props
}: BadgeProps) => {
  const sizeClass = size === 'Small' ? 'py-[3.5px] px-[10px] rounded-[10px] text-xs' : 'py-[2px] px-[14.5px] rounded-[100px] text-base';
  const borderClass = border ? 'border border-gray-30' : 'border border-transparent'

  return (
    <div
        className={`${sizeClass} ${borderClass}`}
        style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </div>
  );
};
