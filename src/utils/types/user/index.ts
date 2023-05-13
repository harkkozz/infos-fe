export interface UserLoginPayload {
  email: string;
  password: string;
}

export interface UserSignupPayload extends UserLoginPayload {
  name: string;
}
