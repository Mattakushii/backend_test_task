import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('message')
export class MessageEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  id_author: number;

  @Column()
  id_receiver: number;

  @Column()
  chat_id: number;

  @Column()
  text: string;
}
