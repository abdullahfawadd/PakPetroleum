'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface EnterpriseCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
  actionLabel?: string;
  href?: string;
  onClick?: () => void;
}

export function EnterpriseCard({
  icon: Icon,
  title,
  description,
  className,
  actionLabel = "View Details",
  href,
  onClick,
}: EnterpriseCardProps) {

  const CardContent = () => (
    <div
      className={cn(
        "group relative flex flex-col p-8 bg-navy-900 border border-white/5 hover:border-teal-500/30 transition-all duration-300 overflow-hidden",
        className
      )}
    >
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Hover Reveal Arrow */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
         <ArrowUpRight className="w-5 h-5 text-teal-400" />
      </div>

      {/* Icon Container */}
      {Icon && (
        <div className="w-12 h-12 mb-6 flex items-center justify-center bg-navy-800 border border-white/5 rounded-sm group-hover:bg-teal-400/10 group-hover:border-teal-400/20 transition-colors">
          <Icon className="w-6 h-6 text-slate-light group-hover:text-teal-400 transition-colors" strokeWidth={1.5} />
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Footer / Action */}
      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs font-mono text-teal-400 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {actionLabel}
        </span>
        <div className="w-full h-0.5 bg-navy-800 absolute bottom-0 left-0 group-hover:bg-teal-400 transition-colors duration-500" />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className="block h-full">
        <CardContent />
      </Link>
    );
  }

  return (
    <div onClick={onClick} className="h-full cursor-pointer">
      <CardContent />
    </div>
  );
}
