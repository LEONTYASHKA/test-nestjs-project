import { Pet } from './pet';

export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  pets: Array<Pet>;
}