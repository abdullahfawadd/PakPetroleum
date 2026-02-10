import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'hero' | 'full' | 'small' | 'large';
  container?: boolean; // Whether to wrap content in a container
  containerClassName?: string;
  children: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', container = true, containerClassName, children, ...props }, ref) => {

    const variantStyles = {
      default: 'py-24 lg:py-32', // Standard section spacing
      hero: 'pt-32 pb-16 lg:pt-48 lg:pb-32', // Hero section spacing
      full: 'py-0', // No padding
      small: 'py-16 lg:py-24', // Compact section spacing
      large: 'py-32 lg:py-48', // Cinematic spacing for major sections
    };

    return (
      <section
        ref={ref}
        className={cn('relative w-full overflow-hidden bg-navy-950', variantStyles[variant], className)}
        {...props}
      >
        {container ? (
          <div className={cn('container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]', containerClassName)}>
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = 'Section';

export { Section };
