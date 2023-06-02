import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/CreateUser.dto';
import { UsersService } from 'src/user/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.findUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
  }
}
