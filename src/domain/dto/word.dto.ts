import { ApiProperty } from '@nestjs/swagger';

export class WordDto {
  @ApiProperty({ description: 'Key word', example: 'KeyWordExample' })
  word: string;

  @ApiProperty({
    description: 'Phrase associated with the word',
    example: 'PhraseExample',
  })
  phrase: string;

  @ApiProperty({
    description: 'Key associated with the word',
    example: 'KeyExample',
  })
  key: string;
}
