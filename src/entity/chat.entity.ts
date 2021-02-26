import { UserEntity } from 'src/entity/user.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity('chat')
@ObjectType()
export class ChatEntity {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id: string;

  @Column()
  @Field()
  chat_name: string;

  @ManyToMany((type) => UserEntity, (user) => user.id)
  @JoinTable()
  @Field((type) => [UserEntity])
  users: UserEntity[];
}
