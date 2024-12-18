import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'default' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', children, className = '', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded transition-colors';
  const variants = {
    primary: 'bg-[#FEA55F] text-[#01080E] hover:bg-[#FFAC6B]',
    default: 'bg-[#1C2B3A] text-white hover:bg-[#263850]',
    ghost: 'bg-transparent text-white hover:opacity-50',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;