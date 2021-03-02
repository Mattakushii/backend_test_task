import { CreateChatInput, UpdateChatInput } from 'src/dto/index.dto';
import { UserEntity } from 'src/entity/user.entity';
import {
  Resolver,
  Query,
  Parent,
  ResolveField,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { ChatEntity } from 'src/entity/chat.entity';
import { ChatService } from 'src/services/chat.service';

@Resolver(() => ChatEntity)
export class ChatResolver {
  constructor(private chatService: ChatService) {}

  @Query(() => [ChatEntity])
  chats(): Promise<ChatEntity[]> {
    return this.chatService.findAll();
  }

  @Mutation(() => ChatEntity)
  createChat(
    @Args('createChatInput') createChatInput: CreateChatInput,
  ): Promise<ChatEntity> {
    return this.chatService.createChat(createChatInput);
  }

  @Mutation(() => ChatEntity)
  updateChat(
    @Args('updateChatInput') updateChatInput: UpdateChatInput,
  ): Promise<ChatEntity> {
    return this.chatService.updateChat(updateChatInput);
  }

  @ResolveField(() => UserEntity)
  owner(@Parent() chat: ChatEntity): Promise<UserEntity> {
    return this.chatService.getOwner(chat.owner_id);
  }
}
