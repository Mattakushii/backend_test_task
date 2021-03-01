import { UserModule } from './user.module';
import { ChatService } from './../services/chat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ChatEntity } from 'src/entity/chat.entity';
import { ChatResolver } from 'src/resolvers/chat.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ChatEntity]), UserModule],
  providers: [ChatService, ChatResolver],
})
export class ChatModule {}
