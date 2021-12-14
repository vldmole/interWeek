import userCrud from "../../user/services/crud"

import { SignUpDto } from '../dtos/incoming/signUp.dto'
import { SignResultDto } from "../dtos/outcoming/signResult.dto";
import { User } from "../../user/entity/user";

import signUpExceptions from "../exceptions/signUpExceptions";
import webToken from '../util/webToken';

import validator from "validator";


export default async function signUp(dto: SignUpDto): Promise<SignResultDto>
{
   if (!validator.isEmail(dto.email))
      throw signUpExceptions.signUpInvalidData(dto);
   
   const user = await userCrud.findByEmail(dto.email);
   if (user)
      throw signUpExceptions.signUpDuplicated(dto);
      
   const newlyUser = await userCrud.create(dto);
   return webToken.createWebToken(newlyUser);
}


/*
export default async function signUp(dto: SignUpDto): Promise<SignUpResultDto>
{
   const userRepository = getRepository(User);

   const user = await userRepository.findOne({
      where: {
         email: dto.email
      }
   })
   
   if (user)
      throw exceptions.userAlreadyExist(dto);

   const pwdHash = createHmac('md5', dto.password).digest().toString();
   const newUser = {
      ...dto,
      password: pwdHash,
      accountNumber: "" + Math.floor(Math.random() * 99999) + "-" + Math.floor(Math.random() * 10),
      mallet: 1.00
   };
   
   const newlyUser = await userRepository.save(newUser);
   
   return createSignUpResultDto(newlyUser);
}
*/