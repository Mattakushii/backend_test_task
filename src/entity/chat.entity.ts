import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('chat')
export class ChatEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  first_user: number;

  @Column()
  second_user: number;
}
