import React from 'react';
import { cn } from '@/lib/utils';

interface StickyHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function StickyHeader({ label, title, description, className, children }: StickyHeaderProps) {
  return (
    <div
      className={cn(
        "sticky top-24 z-20 flex flex-col gap-4 pb-8 bg-navy-950/90 backdrop-blur-md",
        // We use sticky top-24 to clear the main nav if any
        className
      )}
    >
      {label && (
        <span className="text-teal-400 font-mono text-xs uppercase tracking-widest pl-1 border-l-2 border-teal-500/50">
          {label}
        </span>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mt-2">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
