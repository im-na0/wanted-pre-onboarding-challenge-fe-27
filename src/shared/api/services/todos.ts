import { instance } from "../instance";
import type { ApiResponse } from "../types/common";
import type {
  CreateTodoRequest,
  CreateTodoResponse,
  GetTodosResponse,
  Todo,
  UpdateTodoRequest,
  UpdateTodoResponse,
} from "../types/todos";

export const TodoServices = {
  getTodos: async () => {
    const { data } = await instance.get<ApiResponse<Todo[]>>(`todos`).json();
    return data;
  },

  getTodoById: async (params: { id: string }) => {
    const { data } = await instance
      .get<ApiResponse<GetTodosResponse>>(`todos/${params.id}`)
      .json();
    return data;
  },

  createTodo: async (params: { data: CreateTodoRequest }) => {
    const { data } = await instance
      .post<ApiResponse<CreateTodoResponse>>("todos", { json: params.data })
      .json();
    return data;
  },

  updateTodo: async (params: { id: string; data: UpdateTodoRequest }) => {
    const { data } = await instance
      .put<ApiResponse<UpdateTodoResponse>>(`todos/${params.id}`, {
        json: params.data,
      })
      .json();
    return data;
  },

  deleteTodo: async (params: { id: string }) => {
    return await instance
      .delete<ApiResponse<null>>(`todos/${params.id}`)
      .json();
  },
};
