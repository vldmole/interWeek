import { createHmac } from 'crypto';

import
{
   Entity,
   PrimaryGeneratedColumn,
   Column,
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

   //-------------------------------------------------------------------
   public static createPasswordHash(pass: string): string
   {
      return createHmac('md5', pass).digest().toString();
   }
}
 