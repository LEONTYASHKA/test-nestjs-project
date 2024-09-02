import { Pet } from './pet';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  pets: Array<Pet>;
  constructor (id, firstName, lastName, age, pets = new Array<Pet>()){
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.pets = pets
  }
}