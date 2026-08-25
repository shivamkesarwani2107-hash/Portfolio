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
    primary: "bg-white text-dark-900 hover:bg-slate-100 font-semibold shadow-sm hover:shadow active:scale-[0.98]",
    secondary: "bg-dark-800/80 hover:bg-dark-700/90 text-slate-200 hover:text-white border border-slate-700/60 hover:border-slate-500/80 active:scale-[0.98]",
    outline: "bg-transparent text-slate-300 hover:text-white border border-slate-700/80 hover:border-slate-500 hover:bg-dark-800/50 active:scale-[0.98]",
    ghost: "bg-transparent text-slate-400 hover:text-slate-200 hover:bg-dark-800/60",
    emerald: "bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-semibold shadow-lg shadow-emerald-500/20 active:scale-[0.98]",
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
