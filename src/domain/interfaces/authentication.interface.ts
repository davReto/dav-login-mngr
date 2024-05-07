export interface IOtpParams {
  otp: string;
  userId: string;
}

export interface IPasswordParams {
  email: string;
  password: string;
}

export interface AuthenticationStrategy {
  login(loginParams: IOtpParams | IPasswordParams): Promise<boolean>;
}
