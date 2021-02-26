import { UserEntity } from 'src/entity/user.entity';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  username: string;

  @Field()
  password: string;
}

@InputType()
export class CreateChatInput {
  @Field()
  chat_owner: UserEntity;

  @Field()
  chatName: string;
}
