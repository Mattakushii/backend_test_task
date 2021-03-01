import { ChatEntity } from 'src/entity/chat.entity';
import { UserEntity } from 'src/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { UserResolver } from 'src/resolvers/user.resolver';
import { UsersService } from 'src/services/user.service';
import { ChatService } from 'src/services/chat.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ChatEntity])],
  providers: [UsersService, UserResolver, ChatService],
  exports: [UsersService],
})
export class UserModule {}
