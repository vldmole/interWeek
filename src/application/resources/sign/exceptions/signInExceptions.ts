import Exception from "../../../Exceptions/Exception"
import { SignInDto } from "../dtos/incoming/signIn.dto";

function invalidCredentials(dto: SignInDto)
{
   return new Exception(500, 'Credenciais Inválidas!', dto);
}

export default {
   invalidCredentials,
}