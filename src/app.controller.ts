import { Controller, Get } from '@nestjs/common';
import { Users } from '../components/UsersList/gandomUsersList';

@Controller('/api')
export class AppController {
  @Get('/getUsers')
  getUsers() {
    const usersList = new Users(10);
    return usersList.getUsersList();
  }
}
