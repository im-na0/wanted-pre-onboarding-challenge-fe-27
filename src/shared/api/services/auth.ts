import { instance } from "../instance";
import type {
  LoginRequest,
  SignUpRequest,
  SignUpResponse,
} from "../types/auth";

export const AuthService = {
  login: async (params: { data: LoginRequest }) => {
    return await instance.post("users/login", { json: params.data }).json();
  },
  signup: async (params: { data: SignUpRequest }) => {
    return await instance
      .post<SignUpResponse>("users/create", { json: params.data })
      .json();
  },
};
