import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput, SignInInput } from 'src/dto/index.dto';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserInput: CreateUserInput): Promise<UserEntity> {
    const hash = await bcrypt.hash(createUserInput.password, 10);

    const user = Object.assign(createUserInput, { password: hash });

    return this.userRepository.create(user).save();
  }

  async signIn(signInInput: SignInInput) {
    const user = await this.findByUsername(signInInput.username);

    if (!user) {
      throw new Error('User not found');
    }

    return await bcrypt.compare(signInInput.password, user.password);
  }

  createToken({ id, username }: UserEntity) {
    return jwt.sign({ id, username }, 'secret');
  }

  updateUser() {}

  async removeUser(id: string) {
    const user = await this.findById(id);
    if (!user) throw new Error('User not found');
    user.remove();
    return true;
  }

  async findByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOneOrFail({ where: username });
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findById(id: string): Promise<UserEntity> {
    return await this.userRepository.findOne(id);
  }
}
