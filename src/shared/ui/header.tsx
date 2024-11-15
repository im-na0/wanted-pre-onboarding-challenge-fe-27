import dayjs from 'dayjs';
import { Button } from './button';
import { LogOut } from 'lucide-react';

export function Header() {
  const today = dayjs().format('MM월 DD일');

  return (
    <div className="border-b border-neutral-100 bg-white bg-opacity-75 p-4">
      <div className="flex items-center">
        {/* 헤더 텍스트 */}
        <div className="flex-1">
          <div className="text-base font-bold tracking-tight text-neutral-800">
            TodoList.
          </div>
          <div className="text-xl font-bold leading-tight tracking-tight text-neutral-900">
            {today}
          </div>
        </div>

        {/* 로그아웃 버튼 */}
        <div className="flex justify-end">
          <Button variant="outline" size="icon">
            <LogOut size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
