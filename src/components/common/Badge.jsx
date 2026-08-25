import React from 'react';

export default function Badge({
  children,
  variant = 'gray',
  dot = false,
  dotColor = 'bg-emerald-400',
  pulse = false,
  size = 'md',
  icon: Icon,
  className = '',
}) {
  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 gap-1.5",
    md: "text-xs px-2.5 py-1 gap-2",
    lg: "text-sm px-3 py-1.5 gap-2",
  };

  const variantStyles = {
    emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
    blue: "bg-blue-500/10 text-blue-300 border-blue-500/25",
    indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/25",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/25",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25",
    amber: "bg-amber-500/10 text-amber-300 border-amber-500/25",
    gray: "bg-slate-800/80 text-slate-300 border-slate-700/60",
    tech: "bg-dark-800/90 text-slate-300 border-slate-700/50 font-mono text-[11px]",
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border transition-colors ${
        sizeStyles[size] || sizeStyles.md
      } ${variantStyles[variant] || variantStyles.gray} ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          {pulse && (
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor}`}
            />
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`} />
        </span>
      )}
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </span>
  );
}
