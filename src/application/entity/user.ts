import
{
   Entity,
   PrimaryGeneratedColumn,
   JoinColumn,
   OneToOne,
   Column,
   CreateDateColumn,
   ManyToOne,
   UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User
{
   @PrimaryGeneratedColumn('uuid')
   id: string

   @Column()
   firstName: string;

   @Column()
   midleName: string;

   @Column()
   lastName: string;
   
   @Column()
   accountNumber: string;

   @Column()
   mallet: number;

   @Column()
   email: string;

   @Column()
   password: string;
}
 