import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ChatEntity } from 'src/entity/chat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatEntity])],
})
export class ChatModule {}
