import { ApiProperty } from '@nestjs/swagger';

export class IdentityDto {
  @ApiProperty({ description: 'The type of identity', example: 'CC' })
  typeIdentity: string;
  @ApiProperty({
    description: 'The number of the identity',
    example: '1019',
  })
  identity: string;
  @ApiProperty({ description: 'The number product', example: 'Product123' })
  numberProduct: string;
  @ApiProperty({ description: 'The type of product', example: '1019' })
  product: string;
}
