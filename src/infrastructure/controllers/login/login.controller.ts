import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { WordDto } from '../../../domain/dto/word.dto';
import { OtpDto } from '../../../domain/dto/otp.dto';
import { AuthLoginDto } from '../../../domain/dto/auth.dto';
import { IdentityDto } from '../../../domain/dto/identity.dto';
import { OtpService } from '../../../application/use-cases/otp/otp.service';
import { AuthService } from '../../../application/use-cases/auth/auth.service';
import { IdentityService } from '../../../application/use-cases/indentity/indentity.service';
import { WordService } from '../../../application/use-cases/word/word.service';
import { User } from '../../../domain/entities/user.entity';

@Controller('login')
export class LoginController {
  constructor(
    private readonly otpService: OtpService,
    private readonly authService: AuthService,
    private readonly identityService: IdentityService,
    private readonly wordService: WordService,
  ) {}

  @Post('/otp')
  @ApiBody({ type: OtpDto, description: 'OTP' })
  async otp(@Body() otpParams: OtpDto): Promise<boolean> {
    return this.otpService.login(otpParams);
  }

  @Post('/login')
  @ApiBody({ type: AuthLoginDto, description: 'login' })
  async login(@Body() otpParams: AuthLoginDto): Promise<User> {
    return this.authService.login(otpParams);
  }

  @Post('/identity')
  @ApiBody({ type: IdentityDto, description: 'Identity' })
  async identity(@Body() identityParams: IdentityDto): Promise<boolean> {
    return this.identityService.login(identityParams);
  }

  @Post('/word')
  @ApiBody({ type: WordDto, description: 'Word' })
  async word(@Body() wordParams: WordDto): Promise<boolean> {
    return this.wordService.login(wordParams);
  }
}
