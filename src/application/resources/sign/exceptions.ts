import Exception from "../../Exceptions/Exception"
import SignInDto from "./signIn.dto";

function userNotFound(email: string)
{
   return new Exception(500, `Usuário não encontrado! (email:${ email})`);
}

function invalidCredentials(dto:SignInDto)
{
   return new Exception(500, `Credenciais Inválidas! (${ dto })`);
}

export default {
   userNotFound,
   invalidCredentials
}
