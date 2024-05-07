export interface IOtpParams {
  otp: string;
  userId: string;
}

export interface AuthenticationStrategy {
  login(loginParams: IOtpParams): Promise<boolean>;
}
