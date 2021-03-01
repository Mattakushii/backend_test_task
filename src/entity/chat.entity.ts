import { UserEntity } from 'src/entity/user.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  ManyToOne,
  ManyToMany,
  BaseEntity,
} from 'typeorm';

@Entity('chat')
@ObjectType()
export class ChatEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  owner_id: string;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @Field(() => UserEntity)
  chat_owner: UserEntity;

  @ManyToMany(() => UserEntity, (user) => user.id)
  @Field(() => [UserEntity])
  users: UserEntity[];

  @Column()
  @Field()
  chat_name: string;
}
