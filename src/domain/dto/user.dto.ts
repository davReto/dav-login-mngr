import { ApiProperty } from '@nestjs/swagger';
import { ProductDto } from './product.dto';
import { WordDto } from './word.dto';

export class CreateUserDto {
  @ApiProperty({ description: 'The name of the user.', example: 'John' })
  name: string;

  @ApiProperty({ description: 'The identification ', example: 'CC' })
  typeIdentification: string;

  @ApiProperty({
    description: 'The number of the user.',
    example: '1019',
  })
  numberIdentification: string;

  @ApiProperty({ description: 'The otp', example: '20' })
  otp: string;

  @ApiProperty({ description: 'Product details', type: ProductDto })
  product: ProductDto;

  @ApiProperty({ description: 'Word details', type: WordDto })
  word: WordDto;

  @ApiProperty({ description: 'The password', example: '123456' })
  password: string;
}
