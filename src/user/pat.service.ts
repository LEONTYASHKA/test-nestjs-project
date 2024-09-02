import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user';
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