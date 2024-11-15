import { useState } from 'react';
import clsx from 'clsx';

import { AlarmClock } from 'lucide-react';
import { Checkbox, cn } from '@/shared';
import type { CheckedState } from '@radix-ui/react-checkbox';
import { PriorityBadge } from './priority-badge';

interface TodoCardProps {
  title: string;
  createdAt: string;
  updatedAt?: string;
  level?: 'urgent' | 'normal' | 'low';
}

export const TodoCard = ({
  title,
  createdAt,
  updatedAt,
  level,
}: TodoCardProps) => {
  const [isChecked, setIsChecked] = useState<CheckedState>(false);

  return (
    <div className={clsx('relative flex rounded-3xl bg-white p-5 shadow')}>
      <div className="mr-4 flex items-center">
        <Checkbox
          checked={isChecked}
          onCheckedChange={(isChecked) => setIsChecked(isChecked)}
          onChange={(e) => {
            console.log(e);
          }}
          className="data-[state=checked]:border-primary h-9 w-9 rounded-full border-[1.75px] border-neutral-200"
        />
      </div>
      <div className="flex-1">
        <h3
          className={cn(
            'text-xl font-medium text-neutral-800',
            isChecked && 'text-neutral-600 line-through',
          )}
        >
          {title}
        </h3>

        <div className="mt-1 flex items-center gap-2">
          <div className="flex items-center text-sm tracking-tight text-neutral-500">
            <span className="mr-1">
              <AlarmClock className="h-4 w-4" />
            </span>
            <span>{updatedAt || createdAt}</span>
          </div>
          <PriorityBadge level={level} />
        </div>
      </div>
    </div>
  );
};
