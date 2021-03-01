import { UserEntity } from 'src/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { UserResolver } from 'src/resolvers/user.resolver';
import { UsersService } from 'src/services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService, UserResolver],
  exports: [UsersService],
})
export class UserModule {}
