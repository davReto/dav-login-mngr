import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { OtpService } from '../../../application/use-cases/otp/otp.service';
import { OtpDto } from '../../../domain/dto/otp.dto';
import { AuthService } from '../../../application/use-cases/auth/auth.service';
import { AuthLoginDto } from '../../../domain/dto/auth.dto';
import { IdentityDto } from '../../../domain/dto/identity.dto';
import { IdentityService } from '../../../application/use-cases/indentity/indentity.service';

@Controller('login')
export class LoginController {
  constructor(
    private readonly otpService: OtpService,
    private readonly authService: AuthService,
    private readonly identityService: IdentityService,
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

  @Post('/identity')
  @ApiBody({ type: IdentityDto, description: 'Identity' })
  async identity(@Body() identityParams: IdentityDto): Promise<boolean> {
    return this.identityService.login(identityParams);
  }
}
