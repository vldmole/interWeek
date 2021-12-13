import {
      Entity,
      PrimaryGeneratedColumn,
      JoinColumn,
      Column,
      CreateDateColumn,
      ManyToOne,
} from 'typeorm';
   
import { User } from '../../user/entity/user';

@Entity()
export class Pix
{
   @PrimaryGeneratedColumn('uuid')
   id: string

   @Column()
   status: string;

   @ManyToOne(() => User, user => user.id, { nullable: false })
   @JoinColumn()
   payingUser: User;

   @ManyToOne(() => User, user => user.id, { nullable: false })
   @JoinColumn()
   receiverUser: User;

   @Column()
   value: number;

   @CreateDateColumn()
   createdAt: string;

   @CreateDateColumn()
   updatedAt: string;
}
