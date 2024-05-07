export interface IOtpParams {
  otp: string;
  userId: string;
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

export interface AuthenticationStrategy {
  login(
    loginParams: IOtpParams | IPasswordParams | IdentityParams,
  ): Promise<boolean>;
}
