import { Injectable } from '@nestjs/common';
import { Users } from './randomUsersList';

@Injectable()
export class UsersListService {
  getUsers() {
    const usersList = new Users(10);
    return usersList.getUsersList();
  }
}
