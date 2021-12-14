import { getRepository } from "typeorm";
import { User } from "../entity/user";
import { CreateUserDto } from "../dtos/createUser.dto";
import exceptions from "../exceptions/exceptions";


//-------------------------------------------------------------------
export async function create(dto: CreateUserDto): Promise<User>
{
   const userRepository = getRepository(User);
   const user = await userRepository.findOne({
      where: {
         email: dto.email
      }
   })

   if (user) 
      throw exceptions.existingUserException(dto);
   
   const newUser = {
      ...dto,
      password: User.createPasswordHash(dto.password),
      accountNumber: "" + Math.floor(Math.random() * 99999) + "-" + Math.floor(Math.random() * 10),
      mallet: 50
   }
   return userRepository.save(newUser);
}

//-------------------------------------------------------------------
export async function save(user: User): Promise<User>
{
   const userRepository = getRepository(User);
   return userRepository.save(user);
}

//-------------------------------------------------------------------
export async function findById(id: string | undefined): Promise<User | undefined>
{
   if (!id)
      return undefined;
   
   const userRepository = getRepository(User);
   return userRepository.findOne({
      where: {
         id: id
      }
   })
}

//-------------------------------------------------------------------
export async function findByEmail(email: string): Promise<User | undefined>
{
   const userRepository = getRepository(User);
   return userRepository.findOne({
      where: {
         email: email
      }
   })
}

//-------------------------------------------------------------------
export default {
   create,
   findByEmail,
   findById,
   save,   
}