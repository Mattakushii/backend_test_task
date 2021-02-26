import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ChatEntity } from './chat.entity';

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

  @Column({ default: true })
  @Field({ defaultValue: true })
  isActive: boolean;
}
