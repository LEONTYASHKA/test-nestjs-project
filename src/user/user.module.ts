import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PatService } from './pat.service';
import { TestService } from './dtos/test.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PatService, TestService]
})
export class UserModule {}
