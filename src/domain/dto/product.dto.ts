import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({ description: 'Product number', example: 'Product123' })
  numberProduct: string;

  @ApiProperty({
    description: 'Product identification number',
    example: '123456789',
  })
  numberIdentification: string;
}
