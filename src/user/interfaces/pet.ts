export class Pet {
  id: number;
  name: string;
  private age: number;
  constructor (id: number, name: string, age: number){
    this.id = id;
    this.name = name;
    this.age = age;
  }
}