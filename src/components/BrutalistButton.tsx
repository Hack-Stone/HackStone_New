import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface BrutalistButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'outline' | 'lime' | 'purple-hover' | 'nav-cta';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
}

export default function BrutalistButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}: BrutalistButtonProps) {
  // Base style class (Default typography is JetBrains Mono font-ui-label, sharp-edged, uppercase)
  const baseClass = "font-ui-label text-ui-label uppercase transition-all duration-150 inline-block text-center border border-primary font-bold cursor-pointer select-none";
  
  // Size classes
  let sizeClass = "px-6 py-3"; // md default
  if (size === 'sm') {
    sizeClass = "px-4 py-2";
  } else if (size === 'lg') {
    sizeClass = "px-8 py-4";
  } else if (size === 'xl') {
    sizeClass = "px-12 py-6 font-display-lg text-headline-md border-2";
  }

  // Variant classes mapping to color tokens from design system
  let variantClass = "";
  switch (variant) {
    case 'primary':
      variantClass = "bg-primary text-on-primary hover:bg-syntax-lime hover:text-primary";
      break;
    case 'outline':
      variantClass = "bg-transparent text-primary hover:bg-surface-container";
      break;
    case 'lime':
      variantClass = "bg-syntax-lime text-primary border-syntax-lime hover:bg-transparent hover:text-syntax-lime border-2";
      break;
    case 'purple-hover':
      variantClass = "bg-primary text-on-primary hover:bg-syntax-purple";
      break;
    case 'nav-cta':
      variantClass = "bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary border-primary dark:border-outline hover:bg-syntax-lime dark:hover:bg-syntax-lime hover:text-primary dark:hover:text-primary";
      break;
  }

  const combinedClass = `${baseClass} ${sizeClass} ${variantClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClass}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
