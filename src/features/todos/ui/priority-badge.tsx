import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      priority: {
        urgent: 'border-transparent bg-red-100 text-red-600',
        normal: 'border-transparent bg-yellow-100 text-yellow-600',
        low: 'border-transparent bg-green-100 text-green-600',
      },
    },
    defaultVariants: {
      priority: 'normal',
    },
  },
);

export interface PriorityBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  level?: 'urgent' | 'normal' | 'low';
}

function PriorityBadge({
  level = 'normal',
  className,
  ...props
}: PriorityBadgeProps) {
  const priorityTextMap: Record<string, string> = {
    urgent: '높음',
    normal: '보통',
    low: '낮음',
  };

  return (
    <div
      className={cn(badgeVariants({ priority: level }), className)}
      {...props}
    >
      <span className="mr-1 h-2 w-2 rounded-full bg-current"></span>
      {priorityTextMap[level] || '보통'}
    </div>
  );
}

export { PriorityBadge, badgeVariants };
