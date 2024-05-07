import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'The name of the user.', example: 'John' })
  name: string;

  @ApiProperty({ description: 'The last name of the user.', example: 'Doe' })
  lastName: string;

  @ApiProperty({
    description: 'The email of the user.',
    example: 'john.doe@example.com',
  })
  email: string;

  @ApiProperty({ description: 'The age of the user.', example: 30 })
  age: number;
}
