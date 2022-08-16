import { Controller, Get, Param } from '@nestjs/common';
import { UsersListService } from 'services/UsersList';

@Controller('/api')
export class AppController {
  constructor(private usersListService: UsersListService) {}
  @Get('/getRandomUser')
  getUser() {
    return this.usersListService.getUsers(1);
  }
  @Get('/getRandomUsers/:count')
  getUsers(@Param('count') count: number) {
    return this.usersListService.getUsers(count);
  }
}
