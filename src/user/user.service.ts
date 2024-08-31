import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserInterface } from './interfaces/user.interface';
import { PatService } from './pat.service';
import { Pet } from './interfaces/pet';

@Injectable()
export class UserService {
  private users = new Array<UserInterface>();
  private map = new Map<number, Pet>();
  private patCounter: number = 1;

  constructor(private readonly patService: PatService) {
    this.users.push({
      id: 1,
      firstName: "vasya",
      lastName: "Honcharenko",
      age: 45,
      pets: []
    });
  }
  findUserById(id) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        return this.users[i];
      }
    }
  }

  findUserByName(firstName) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].firstName == firstName) {
        return this.users[i];
      }
    }
  }

  getAllUsers() {
    return this.users

  }

  createNewUser(id: number, firstName: string, lastName: string, age: number): UserInterface {
    const user = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      age: age,
      pets: []
    };
    this.users.push(user)
    return user;
  }

  async updateUser(userIdToUpdate: number, NewFirstName: string, NewLastName: string, NewAge: number): Promise<UserInterface> {
    const findedUser = this.findUserById(userIdToUpdate);
    if (!findedUser) {
      throw new NotFoundException('User with such id not found');
    }
    const foundUserByName = this.findUserByName(NewFirstName);
    if (!foundUserByName){
      findedUser.firstName = NewFirstName;
      findedUser.lastName = NewLastName;
      findedUser.age = NewAge;
    return findedUser;
  }
    else {
     throw new BadRequestException("user already exist")
    }
  }
  udolenieUsera(userId: number): string{
    const findedUser = this.findUserById(userId);
    const newUsersArray = new Array<UserInterface>();
    if (!findedUser) {
      return 'User not found';
    }
    if (findedUser.id == userId) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id != userId) {
          newUsersArray.push(this.users[i]);
        }
      }
      this.users = newUsersArray;
      return 'User deleted successfully';
    }
  }

   addPatByUserId(userId: number, name: string, age: number){
    const foundUser = this.findUserById(userId); // Нахожу юзера которому добавлю питомца
     if (!foundUser){ // Проверяю есть ли юзер с данным айди
       throw new NotFoundException('User with such id not found ');
     }
     const newPet = new Pet(this.patCounter++, name, age); // создаю переменую в которую добавляю нового  питомца
     this.map.set(userId, newPet);// ну вот сохранил его в мапу как ты и хотел

     foundUser.pets.push(newPet);// добавляю найденому юзеру в масив pets нашего питомца
      return newPet;
  }
}