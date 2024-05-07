import { ApiProperty } from '@nestjs/swagger';

export class OtpDto {
  @ApiProperty({
    description: 'The OTP of the user.',
    example: '246a8b08-897d-4c82-9c50-e1a8ab86f173',
  })
  otp: string;
  @ApiProperty({ description: 'The user id.', example: '20' })
  userId: string;
}
