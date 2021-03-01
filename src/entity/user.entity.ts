import { ChatEntity } from 'src/entity/chat.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
@ObjectType()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  username: string;

  @Column('varchar')
  @Field()
  password: string;

  @OneToMany(() => ChatEntity, (chat) => chat.chat_owner)
  @Field(() => [ChatEntity], { nullable: true })
  chats: ChatEntity[];
}
