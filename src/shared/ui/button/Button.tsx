import React, { FC, memo } from 'react';
import cn from 'clsx';
import './button.css';

interface ButtonProps {
  type?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ type, size = 'medium', label, onClick, ...props }) => {

  return (
    <button
      type="button"
      className={cn('btn-toggle', `btn-toggle--${size}`)}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default memo(Button);
