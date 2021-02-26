import { CreateUserInput } from 'src/dto/index.dto';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserEntity } from 'src/entity/user.entity';
import { UsersService } from 'src/services/user.service';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private userService: UsersService) {}

  @Query(() => [UserEntity])
  users(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Mutation(() => UserEntity)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<UserEntity> {
    return this.userService.addUser(createUserInput);
  }
}
