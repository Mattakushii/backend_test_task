import { CreateUserInput } from './../dto/index.dto';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserEntity } from 'src/entity/user.entity';
import { UsersService } from 'src/services/user.service';

@Resolver((of) => UserEntity)
export class UserResolver {
  constructor(private userService: UsersService) {}

  @Query((returns) => [UserEntity])
  users(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Mutation((returns) => UserEntity)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<UserEntity> {
    return this.userService.addUser(createUserInput);
  }
}
