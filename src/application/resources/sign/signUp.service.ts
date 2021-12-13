import userCrud from "../user/services/crud"
import userCrudExceptions from "../user/exceptions/exceptions"
import { createHmac } from 'crypto';

import { SignUpDto, SignUpResultDto } from './dtos/signUp.dto'
import { User } from "../user/entity/user";

import exceptions from "./exceptions/exceptions";
import webToken from './util/webToken';


function createSignUpResultDto(user: User): SignUpResultDto
{
   return {
      id: user.id,

      firstName: user.firstName,
      midleName: user.midleName,
      lastName:  user.lastName,
      email:     user.email,

      accountNumber: user.accountNumber,
      mallet: user.mallet,

      signData: webToken.createWebToken(user),
   };
}

export default async function signUp(dto: SignUpDto): Promise<SignUpResultDto>
{
   const user = await userCrud.findByEmail(dto.email);

   if (!user)
   {
      const newlyUser = await userCrud.create(dto);
      return createSignUpResultDto(newlyUser);
   }

   const pwdHash = User.createPasswordHash(dto.password);
   if (pwdHash === user.password)
      return createSignUpResultDto(user);
   
   throw exceptions.signUpInvalidData(dto);   
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