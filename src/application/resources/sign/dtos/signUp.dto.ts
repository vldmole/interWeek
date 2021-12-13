import { CreateUserDto } from "../../user/dtos/createUser.dto";
import { SignInResultDto } from "./signIn.dto";

export interface SignUpDto extends CreateUserDto
{
   //nothing
}

export interface SignUpResultDto
{
   id: string,

   firstName: string,
   midleName: string,
   lastName: string,

   email: string,

   accountNumber: string,
   mallet: number;

   signData: SignInResultDto
}