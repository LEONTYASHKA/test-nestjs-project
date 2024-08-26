import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInterface } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Array<UserInterface> {
    return this.userService.getAllUsers();
  }

  @Post()
  createNewUser(@Body() dto: CreateUserDto): UserInterface {
    return this.userService.createNewUser(dto.id, dto.firstName, dto.lastName, dto.age);
  }


  @Put(':id')
  updateUser(@Body() dto: UpdateUserDto, @Param('id') userIdToUpdate: string): UserInterface {
    return this.userService.updateUser(parseInt(userIdToUpdate), dto.firstName, dto.lastName, dto.age);
  }


}
