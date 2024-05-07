import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { OtpService } from '../../../application/use-cases/otp/otp.service';
import { OtpDto } from '../../../domain/dto/otp.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly otpService: OtpService) {}

  @Post('/otp')
  @ApiBody({ type: OtpDto, description: 'OTP information' })
  async otp(@Body() otpParams: OtpDto): Promise<boolean> {
    return this.otpService.login(otpParams);
  }
}
