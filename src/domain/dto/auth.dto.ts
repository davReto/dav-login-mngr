import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDto {
  @ApiProperty({
    description: 'The email of the user.',
    example: 'santiago@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'The password',
    example: 'password',
  })
  password: string;
}
