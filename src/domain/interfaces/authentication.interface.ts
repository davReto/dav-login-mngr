export interface IOtpParams {
  otp: string;
  userId: string;
  otpCheck: string;
}

export interface IPasswordParams {
  email: string;
  password: string;
}

export interface IdentityParams {
  typeIdentity: string;
  identity: string;
  numberProduct: string;
  product: string;
}

export interface IWordParams {
  word: string;
  phrase: string;
  key: string;
}

export interface AuthenticationStrategy {
  login(
    loginParams: IOtpParams | IPasswordParams | IdentityParams | IWordParams,
  ): Promise<boolean>;
}
