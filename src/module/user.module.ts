import { UserEntity } from 'src/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './../resolvers/user.resolver';
import { UsersService } from './../services/user.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService, UserResolver],
})
export class UserModule {}
