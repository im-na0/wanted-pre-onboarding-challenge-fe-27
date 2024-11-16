type SignForm = {
  email: string;
  password: string;
};
export type LoginRequest = SignForm;
export type LoginResponse = {
  message: string;
  token: string;
};

export type SignUpRequest = SignForm;
export type SignUpResponse = {
  message: string;
  token: string;
};
