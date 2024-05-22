export type SignInProps = {
  onSignIn: () => void;
};

export type SignInData = {
  login: string;
  password: string;
  desktop?: boolean
};

export type SignInResponse = {
  code: number;
  message?: string;
};

export type SignUpData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  message?: string;
};

export type SignUpResponse = {
  code: number;
  message?: string;
  email?: string;
  username: string
};

export type ConfirmCodeData = {
  login: string;
  code: string;
  message?: string;
};

export type ConfirmCodeResponse = {
  code: number;
  email: string;
  message?: string;
};

