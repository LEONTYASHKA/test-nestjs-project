import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInterface } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CreatePatDto } from './dtos/CreatePatDto';
import { Pet } from './interfaces/pet';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  getUsers(): Array<UserInterface> {
    return this.userService.getAllUsers();
  }

  @Post()
  createNewUser(@Body() dto: CreateUserDto): UserInterface {
    return this.userService.createNewUser(dto.id, dto.firstName, dto.lastName, dto.age);
  }


  @Put(':id')
  async updateUser(@Body() dto: UpdateUserDto, @Param('id') userIdToUpdate: string): Promise<UserInterface> {
    return this.userService.updateUser(parseInt(userIdToUpdate), dto.firstName, dto.lastName, dto.age);
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: number): Promise<{ message: string }> {
    return {
      message: await this.userService.udolenieUsera(userId)
    };
  }

  @Post(':id/pet')
  addPatByUserId(@Body() dto: CreatePatDto, @Param('id') userId: number){
    return this.userService.addPatByUserId(userId, dto.name, dto.age);
  }
}