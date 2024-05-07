import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { OtpService } from '../../../application/use-cases/otp/otp.service';
import { OtpDto } from '../../../domain/dto/otp.dto';
import { AuthService } from '../../../application/use-cases/auth/auth.service';
import { AuthLoginDto } from '../../../domain/dto/auth.dto';

@Controller('login')
export class LoginController {
  constructor(
    private readonly otpService: OtpService,
    private readonly authService: AuthService,
  ) {}

  @Post('/otp')
  @ApiBody({ type: OtpDto, description: 'OTP' })
  async otp(@Body() otpParams: OtpDto): Promise<boolean> {
    return this.otpService.login(otpParams);
  }

  @Post('/login')
  @ApiBody({ type: AuthLoginDto, description: 'login' })
  async login(@Body() otpParams: AuthLoginDto): Promise<boolean> {
    return this.authService.login(otpParams);
  }
}
