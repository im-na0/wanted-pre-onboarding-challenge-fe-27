import { Button, ButtonProps } from '@/shared';
import { Plus } from 'lucide-react';

export function AddTodoButton(props: ButtonProps) {
  return (
    <Button size="icon" className="h-12 w-12 rounded-full shadow" {...props}>
      <Plus size={24} className="stroke-2 text-white" />
    </Button>
  );
}
