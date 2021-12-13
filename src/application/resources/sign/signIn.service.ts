import SignInDto from "./signIn.dto";
import { getRepository } from "typeorm";
import { User } from "../../entity/user";
import exceptions from "./exceptions";

export default async function signIn(dto: SignInDto)
{
   const userRepository = getRepository(User);
   const { createHmac } = await import('crypto');
   const passwordHash = createHmac('md5',dto.password).digest().toString();
   console.log("11"+dto);
   const user = await userRepository.findOne({ where: { "email": dto.email } });
   console.log(user);
   const users = await userRepository.count();
   console.log(users);
   if (!user)
      throw exceptions.userNotFound(dto.email);
   
   if (user.password !== passwordHash)
      throw exceptions.invalidCredentials(dto);
      
   return "signIn service";
}