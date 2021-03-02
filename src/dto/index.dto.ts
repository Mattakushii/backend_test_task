import { Field, InputType, Int } from '@nestjs/graphql';

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
  @Field(() => String)
  owner_id: string;

  @Field()
  chat_name: string;
}

@InputType()
export class UpdateChatInput {
  @Field(() => Int)
  id: number;

  @Field()
  chat_name: string;
}

@InputType()
export class SignInInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

@InputType()
export class LoginInput {
  @Field()
  username: string

  @Field()
  password: string
}

@InputType()
export class Token {
  @Field()
  token: string
}