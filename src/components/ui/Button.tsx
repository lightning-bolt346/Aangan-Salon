import { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  href, 
  children, 
  ...props 
}: ButtonProps) {
  const baseClass = "inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-deep-plum text-warm-ivory shadow-lg hover:shadow-[0_4px_20px_rgba(75,30,50,0.2)] hover:-translate-y-0.5 rounded-full",
    secondary: "bg-champagne text-deep-plum shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:brightness-110 rounded-full",
    outline: "border border-deep-plum text-deep-plum hover:bg-deep-plum hover:text-white hover:shadow-md hover:-translate-y-0.5 rounded-full",
    ghost: "hover:bg-sand text-deep-plum rounded-full"
  };

  const sizes = {
    sm: "h-10 px-6 text-[10px]",
    md: "h-12 px-8 text-xs",
    lg: "h-14 px-10 text-sm"
  };

  const classes = cn(baseClass, variants[variant], sizes[size], className);

  if (href) {
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return <a href={href} className={classes} target={href.startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer">{children}</a>;
    }
    return <Link to={href} className={classes}>{children}</Link>;
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
