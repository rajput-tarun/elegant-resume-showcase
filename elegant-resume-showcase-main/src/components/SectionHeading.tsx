
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  alignment = 'left' 
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[alignment]}`}>
      <h2 
        className={`section-heading inline-block text-3xl md:text-4xl font-bold mb-3 ${
          alignment === 'center' ? 'after:left-1/4 after:right-1/4 after:w-1/2 after:mx-auto' : ''
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mt-4 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
