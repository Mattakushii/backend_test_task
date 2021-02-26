import { Resolver, Query } from '@nestjs/graphql';
import { ChatEntity } from 'src/entity/chat.entity';
import { ChatService } from 'src/services/chat.service';

@Resolver(() => ChatEntity)
export class ChatResolver {
  constructor(private chatService: ChatService) {}

  @Query(() => [ChatEntity])
  chats(): Promise<ChatEntity[]> {
    return this.chatService.findAll();
  }
}
