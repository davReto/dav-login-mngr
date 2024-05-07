import { ApiProperty } from '@nestjs/swagger';

export class OtpDto {
  @ApiProperty({ description: 'The OTP of the user.', example: '123456' })
  otp: string;
  @ApiProperty({ description: 'The user id.', example: '123456' })
  userId: string;
}
