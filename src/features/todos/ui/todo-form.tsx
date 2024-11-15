import { Input, Textarea } from '@/shared';
import { PrioritySelect } from './priority-select';

export function TodoForm() {
  return (
    <form>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          {/* 할 일 인풋 */}
          <Input id="title" placeholder="할 일 입력" />
          {/* 우선순위 인풋 */}
          <PrioritySelect />
        </div>
        {/* 메모 입력 인풋 */}
        <Textarea placeholder="메모 입력" />
      </div>
    </form>
  );
}
