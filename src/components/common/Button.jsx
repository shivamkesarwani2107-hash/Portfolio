import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  target,
  rel,
  download,
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed group select-none";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  };

  const variantStyles = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-dark-950 dark:hover:bg-slate-100 font-semibold shadow-sm hover:shadow active:scale-[0.98]",
    secondary: "bg-white hover:bg-slate-100 text-slate-800 dark:bg-dark-800/90 dark:hover:bg-dark-700/90 dark:text-slate-200 dark:hover:text-white border border-slate-200 dark:border-slate-700/60 active:scale-[0.98] shadow-sm",
    outline: "bg-transparent text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-100/80 dark:hover:bg-dark-800/50 active:scale-[0.98]",
    ghost: "bg-transparent text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-dark-800/60",
    emerald: "bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-dark-950 font-semibold shadow-md shadow-emerald-500/20 active:scale-[0.98]",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
    </button>
  );
}
