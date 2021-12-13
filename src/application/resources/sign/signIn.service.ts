import { getRepository } from "typeorm";

import { User } from "../user/entity/user";
import userCrud from "../user/services/crud"
import userCrudExceptions from "../user/exceptions/exceptions";
import { SignInDto, SignInResultDto } from "./dtos/signIn.dto";

import exceptions from "./exceptions/exceptions";
import webToken from './util/webToken';

export default async function signIn(dto: SignInDto): Promise<SignInResultDto>
{
   const user = await userCrud.findByEmail(dto.email);
  
   if (!user)
      throw userCrudExceptions.unknownUserException(dto.email);
   
   const passwordHash = User.createPasswordHash(dto.email);

   if (user.password !== passwordHash)
      throw exceptions.invalidCredentials(dto);
   
   return webToken.createWebToken(user);
}