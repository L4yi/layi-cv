import React from 'react';

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = 'rgba(254, 240, 138, 0.45)',
      shimmerSize = '0.05em',
      shimmerDuration = '3s',
      borderRadius = '16px',
      background = 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            '--spread': '90deg',
            '--shimmer-color': shimmerColor,
            '--radius': borderRadius,
            '--speed': shimmerDuration,
            '--cut': shimmerSize,
            '--bg': background,
          } as React.CSSProperties
        }
        className={`group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-5 py-2.5 text-black font-semibold [background:var(--bg)] [border-radius:var(--radius)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20 ${className}`}
        ref={ref}
        {...props}
      >
        {/* Shimmer light bar */}
        <div className="absolute inset-0 -top-full -bottom-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-shimmer-slide pointer-events-none" />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

ShimmerButton.displayName = 'ShimmerButton';
