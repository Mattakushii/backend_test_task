import { ChatService } from 'src/services/chat.service';
import { UsersService } from './../services/user.service';
import { UserEntity } from 'src/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ChatEntity } from 'src/entity/chat.entity';
import { ChatResolver } from 'src/resolvers/chat.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ChatEntity, UserEntity])],
  providers: [ChatService, ChatResolver, UsersService],
  exports: [ChatService],
})
export class ChatModule {}
