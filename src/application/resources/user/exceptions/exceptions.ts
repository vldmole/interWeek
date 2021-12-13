import Exception from "../../../Exceptions/Exception";
import { CreateUserDto } from "../dtos/createUser.dto"
import { User } from "../entity/user";

function unknownUserException(userId: string)
{
   return new Exception(500, `Identificador de usuário inválido! (id: ${ userId })`);

}

function existingUserException(dto: CreateUserDto)
{
   return new Exception(500, `Usuário já cadatrado! (${ dto })`);
}

function updateUserException(user: User)
{
   return new Exception(500, `Usuário já cadatrado! (${ user })`);
}


export default {
   unknownUserException,
   existingUserException,
   updateUserException,
}