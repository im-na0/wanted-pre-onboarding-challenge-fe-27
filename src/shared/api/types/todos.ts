export const Priority = {
  URGENT: 'urgent',
  NORMAL: 'normal',
  LOW: 'low',
} as const;
export type Priority = (typeof Priority)[keyof typeof Priority];

export const SortOption = {
  CREATED_AT: 'createdAt',
  UPDATED_AT: 'updatedAt',
  PRIORITY: 'priority',
} as const;
export type SortOption = (typeof SortOption)[keyof typeof SortOption];

export const OrderOption = {
  ASC: 'asc',
  DESC: 'desc',
} as const;
export type OrderOption = (typeof OrderOption)[keyof typeof OrderOption];

export type Todo = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  priority: Priority;
};

export type GetTodosRequest = {
  sort?: SortOption;
  order?: OrderOption;
  priorityFilter?: Priority;
  keyword?: string;
  countOnly?: boolean;
};
export type GetTodosResponse = Todo[];

export type GetTodoByIdResponse = Todo;

export type CreateTodoRequest = {
  title: string;
  content: string;
  priority: Priority;
};
export type CreateTodoResponse = Todo;

export type UpdateTodoRequest = {
  title: string;
  content: string;
  priority: Priority;
};
export type UpdateTodoResponse = Todo;
