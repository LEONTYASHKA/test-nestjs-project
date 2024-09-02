import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User} from './interfaces/user';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CreatePatDto } from './dtos/CreatePatDto';
import { Pet } from './interfaces/pet';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  getUsers(): Array<User> {
    return this.userService.getAllUsers();
  }

  @Get(':userId/pet')
  getPetsById(@Param ('userId') userId) : Pet {
    return this.userService.getPetsById(userId);
  }

  @Post()
  createNewUser(@Body() dto: CreateUserDto): User {
    return this.userService.createNewUser(dto.id, dto.firstName, dto.lastName, dto.age);
  }


  @Put(':id')
  async updateUser(@Body() dto: UpdateUserDto, @Param('id') userIdToUpdate: string): Promise<User> {
    return this.userService.updateUser(parseInt(userIdToUpdate), dto.firstName, dto.lastName, dto.age);
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: number): Promise<{ message: string }> {
    return {
      message: await this.userService.udolenieUsera(userId)
    };
  }

  @Post(':id/pet')
  addPatByUserId(@Body() dto: CreatePatDto, @Param('id', ParseIntPipe) userId: number){
    return this.userService.addPatByUserId(userId, dto.name, dto.age);
  }
}