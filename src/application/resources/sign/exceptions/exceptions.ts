import Exception from "../../../Exceptions/Exception"
import { SignInDto } from "../dtos/signIn.dto";
import { SignUpDto } from "../dtos/signUp.dto";

function invalidCredentials(dto:SignInDto)
{
   return new Exception(500, `Credenciais Inválidas! (${ dto })`);
}

function signUpInvalidData(dto: SignUpDto)
{
   return new Exception(500, `Usuário já cadastrado! (Dados Inválidos: ${ dto })`);
}

export default {
   invalidCredentials,
   signUpInvalidData
}
