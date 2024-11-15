type SignForm = {
  email: string;
  password: string;
};

export type LoginRequest = SignForm;

export type SignUpRequest = SignForm;
export type SignUpResponse = {
  message: string;
  token: string;
};
