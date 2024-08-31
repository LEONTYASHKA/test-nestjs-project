import { Injectable } from '@nestjs/common';
import { UserInterface } from './interfaces/user.interface';
import { TestService } from './dtos/test.service';

@Injectable()
export class PatService {

  constructor(private readonly testService: TestService) {
  }
  getAllPats() {
    return [
      {
        name: "test",
        age: 15
      }
    ]
  }
}