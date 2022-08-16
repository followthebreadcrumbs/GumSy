import { Injectable } from '@nestjs/common';
import { Users } from './randomUsersList';

@Injectable()
export class UsersListService {
  getUsers(count: number) {
    const usersList = new Users(Number(count));
    return usersList.getUsersList();
  }
}
