import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from 'src/dto/index.dto';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  addUser(createUserInput: CreateUserInput): Promise<UserEntity> {
    const newUser = this.userRepository.create(createUserInput); // a.k.a sql request

    return this.userRepository.save(newUser); // insert
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}