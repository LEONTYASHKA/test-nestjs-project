import { Injectable } from '@nestjs/common';
import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users = new Array<UserInterface>();
  constructor() {
    this.users.push({
      id: 1,
      firstName: "vasya",
      lastName: "Honcharenko",
      age: 45
    });
  }
 findUserById(id){
    for( let i = 0; i < this.users.length; i++){
      if (this.users[i].id === id) {
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
      age: age
    };
    this.users.push(user)
    return user;
  }
  updateUser(userIdToUpdate: number, NewFirstName: string, NewLastName: string, NewAge: number){
    const findedUser = this.findUserById(userIdToUpdate);
    console.log(findedUser);
    if (findedUser) {
        findedUser.firstName = NewFirstName;
        findedUser.lastName = NewLastName;
        findedUser.age = NewAge;
    }
    return findedUser;
  }
}