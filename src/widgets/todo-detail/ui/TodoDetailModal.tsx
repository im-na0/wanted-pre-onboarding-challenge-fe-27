import { TodoForm } from '@/features/todos';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  Button,
  type DrawerProps,
} from '@/shared';

export function TodoDetailModal(props: DrawerProps) {
  return (
    <Drawer {...props}>
      <DrawerContent>
        <DrawerHeader className="text-start">
          <DrawerTitle>투두 추가하기</DrawerTitle>
        </DrawerHeader>
        <div className="px-4">
          <TodoForm />
        </div>
        <DrawerFooter>
          <Button className="rounded-xl py-6" size="lg">
            <div className="text-base font-semibold">추가하기</div>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
