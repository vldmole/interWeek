import {
      Entity,
      PrimaryGeneratedColumn,
      JoinColumn,
      OneToOne,
      Column,
      CreateDateColumn,
      ManyToOne,
      UpdateDateColumn,
} from 'typeorm';
   
import { User } from './user';

@Entity()
export class Pix
{
   @PrimaryGeneratedColumn('uuid')
   id: string

   @Column()
   status: string;

   @ManyToOne(() => User, user => user.id, { nullable: true })
   @JoinColumn()
   payingUser: User;

   @ManyToOne(() => User, user => user.id, { nullable: true })
   @JoinColumn()
   requestingUser: User;

   @Column()
   value: string;

   @CreateDateColumn()
   createdAt: string;

   @CreateDateColumn()
   updatedAt: string;
}
