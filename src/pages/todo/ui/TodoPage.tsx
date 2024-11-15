import { TodoCard } from '@/features/todos';
import { Header } from '@/shared';
import { AddTodoButton } from './AddTodoButton';
import { useState } from 'react';
import { TodoDetailModal } from '@/widgets';

export function TodoPage() {
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);

  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 p-4">
        <TodoCard title="투두앱 완성하기" createdAt={'24.11.13 오전 9:00'} />
      </div>
      <div className="absolute bottom-5 right-4">
        <AddTodoButton onClick={() => setDetailModalOpen(true)} />
      </div>
      {isDetailModalOpen && (
        <TodoDetailModal
          open={isDetailModalOpen}
          onOpenChange={setDetailModalOpen}
        />
      )}
    </>
  );
}
