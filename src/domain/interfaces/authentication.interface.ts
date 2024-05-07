interface ILoginParams {
  userId: string;
  otp: string;
}

export interface AuthenticationStrategy {
  login(loginParams: ILoginParams): Promise<boolean>;
}
