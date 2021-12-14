import { User } from "../../user/entity/user";
import userCrud from "../../user/services/crud"
import userCrudExceptions from "../../user/exceptions/exceptions";
import { SignInDto } from "../dtos/incoming/signIn.dto";
import { SignResultDto } from "../dtos/outcoming/signResult.dto";

import exceptions from "../exceptions/signExceptions";
import webToken from '../util/webToken';
import validator from "validator";
import signInExceptions from "../exceptions/signInExceptions";

export default async function signIn(dto: SignInDto): Promise<SignResultDto>
{
   if (!validator.isEmail(dto.email))
      throw signInExceptions.invalidCredentials(dto);
   
   const user = await userCrud.findByEmail(dto.email);  
   if (!user)
      throw userCrudExceptions.unknownUserException(dto.email);
   
   const passwordHash = User.createPasswordHash(dto.password);
   if (user.password === passwordHash)
      return webToken.createWebToken(user);
   
   throw exceptions.invalidCredentials(dto);
}