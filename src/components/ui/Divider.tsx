import React from 'react';
import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
  gradient?: boolean;
}

export function Divider({ className, gradient = false }: DividerProps) {
  if (gradient) {
    return (
      <div
        role="separator"
        className={cn(
          "w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent my-12 opacity-70",
          className
        )}
      />
    );
  }

  return (
    <div
      role="separator"
      className={cn(
        "w-full h-px bg-white/5 my-12",
        className
      )}
    />
  );
}
