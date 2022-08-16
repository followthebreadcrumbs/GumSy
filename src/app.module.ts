import { Module } from '@nestjs/common';
import { UsersListService } from 'services/UsersList';
import { AppController } from './app.controller';

@Module({ controllers: [AppController], providers: [UsersListService] })
export class AppModule {}
