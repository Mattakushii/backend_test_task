import { ChatEntity } from 'src/entity/chat.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatEntity)
    private chatRepository: Repository<ChatEntity>,
  ) {}

  async findAll(): Promise<ChatEntity[]> {
    return this.chatRepository.find();
  }
}
