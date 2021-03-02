import { CreateUserInput, LoginInput } from 'src/dto/index.dto';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UserEntity } from 'src/entity/user.entity';
import { UsersService } from 'src/services/user.service'
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private userService: UsersService) { }


  @Query(() => UserEntity)
  @UseGuards(new AuthGuard())
  me(@Context('user') user: UserEntity) {
    console.log(user);

    return user;
  }

  @Query(() => [UserEntity])
  users(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Mutation(() => String)
  async login(@Args('loginInput') loginInput: LoginInput) {

    const user = await this.userService.findByUsername(loginInput.username)

    if (!user) {
      throw new Error('User not found')
    }

    const isCorrectInput = await this.userService.signIn({
      username: loginInput.username,
      password: loginInput.password
    })

    if (isCorrectInput) {
      return this.userService.createToken(user)
    } else {
      throw new Error('Password isn\'t correct')
    }
  }

  @Query(() => UserEntity)
  getUserById(@Args('id') id: string): Promise<UserEntity> {
    return this.userService.findById(id);
  }

  @Mutation(() => UserEntity)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<UserEntity> {
    return this.userService.createUser(createUserInput);
  }
}
