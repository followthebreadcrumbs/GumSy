import { userNames, userSurnames } from './enums';

type TRandomUser = {
  age?: number;
  name?: string;
  surname?: string;
  position?: string;
};

class User {
  name: string;
  surname: string;
  age: number;

  constructor() {
    this.name = this.getRandomUserName();
    this.surname = this.getRandomUserSurname();
    this.age = this.getRandomAge();
  }
  getRandomUserName = () => {
    const randUserIndex = Math.floor(Math.random() * userNames.length);
    return userNames[randUserIndex];
  };
  getRandomUserSurname = () => {
    const randUserIndex = Math.floor(Math.random() * userSurnames.length);
    return userSurnames[randUserIndex];
  };
  getRandomAge = () => {
    return Math.floor(Math.random() * 50);
  };
  getUserInfo = () => {
    return {
      age: this.age,
      name: this.name,
      surname: this.surname,
    };
  };
}

export class Users {
  users: TRandomUser[];

  constructor(usersCount) {
    this.users = this.createRandomUsers(usersCount);
  }
  createRandomUsers: (userNumbers: number) => TRandomUser[] = (userNumbers) => {
    return Array(userNumbers)
      .fill('')
      .map(() => {
        const user = new User();
        return user.getUserInfo();
      });
  };
  getUsersList = () => {
    return this.users;
  };
}
