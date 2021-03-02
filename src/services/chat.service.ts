import { CreateChatInput, UpdateChatInput } from 'src/dto/index.dto';
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

  async createChat(createChatInput: CreateChatInput): Promise<ChatEntity> {
    const newChat = this.chatRepository.create(createChatInput);

    return this.chatRepository.save(newChat);
  }

  async updateChat(updateChatInput: UpdateChatInput): Promise<ChatEntity> {
    const chat = await this.findChatById(updateChatInput.id);

    if (!chat) {
      throw new Error('Chat not found.');
    }

    Object.assign(chat, updateChatInput);
    await chat.save();
    return chat;
  }

  findChatById(id: number): Promise<ChatEntity> {
    return this.chatRepository.findOne(id);
  }

  getOwner(ownerId: string): Promise<UserEntity> {
    return this.usersService.findById(ownerId);
  }
}
