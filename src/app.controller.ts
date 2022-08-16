import { Controller, Get } from '@nestjs/common';
import { UsersListService } from 'services/UsersList';

@Controller('/api')
export class AppController {
  constructor(private usersListService: UsersListService) {}
  @Get('/getUsers')
  getUsers() {
    return this.usersListService.getUsers();
  }
}
