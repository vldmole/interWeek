import { SignUpDto } from "../dtos/incoming/signUp.dto";
import Exception  from "../../../Exceptions/Exception";

function signUpDuplicated(dto: SignUpDto)
{
   console.log(dto);
   return new Exception(500, 'Usuário já cadastrado!', dto);
}

function signUpInvalidData(dto: SignUpDto)
{
   return new Exception(500, 'Dados Inválidos!', dto);
}

export default {
   signUpDuplicated,
   signUpInvalidData,
}