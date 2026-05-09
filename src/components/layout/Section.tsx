import React, { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';
import { FloralCorner } from './FloralCorner';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerClass?: string;
  hasFloralCorners?: boolean;
  className?: string;
  id?: string;
}

export function Section({ children, className, containerClass, hasFloralCorners, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-20 lg:py-24 relative overflow-hidden", className)} {...props}>
      {hasFloralCorners && (
        <>
          <FloralCorner position="top-left" />
          <FloralCorner position="bottom-right" />
        </>
      )}
      <div className={cn("max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10", containerClass)}>
        {children}
      </div>
    </section>
  );
}

