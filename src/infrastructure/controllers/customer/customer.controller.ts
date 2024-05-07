import { Controller, Post, Body } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserDto } from '../../../domain/dto/user.dto';
import { User } from '../../../domain/entities/user.entity';
import { CustomerService } from '../../../application/use-cases/customer/customer.service';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @ApiBody({ type: CreateUserDto, description: 'User information' })
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.customerService.createUser(createUserDto);
  }
}
