import { CreateChatInput } from 'src/dto/index.dto';
import { UsersService } from './user.service';
import { ChatEntity } from 'src/entity/chat.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entity/user.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatEntity)
    private chatRepository: Repository<ChatEntity>,
    private usersService: UsersService,
  ) {}

  findAll(): Promise<ChatEntity[]> {
    return this.chatRepository.find();
  }

  createChat(createChatInput: CreateChatInput): Promise<ChatEntity> {
    const newChat = this.chatRepository.create(createChatInput);
    console.log(newChat);

    return this.chatRepository.save(newChat);
  }

  getOwner(ownerId: string): Promise<UserEntity> {
    return this.usersService.findById(ownerId);
  }
}
