import Exception from "../../../Exceptions/Exception";
import { PixRequestDto } from "../dtos/incoming/pixRequest.dto";


function requestPixNotFound(pixKey: string)
{
   return new Exception(500, `Requisição de Pix não encontrada! (chave PIX: ${ pixKey })`);
}

function unknownRequestingUser(dto: PixRequestDto)
{
   return new Exception(500, `Requisitante desconhecido! (dados PIX: ${ dto })`);
}

function maxPixRequestException(dto: PixRequestDto)
{
   return new Exception(500, `O máximp são 10 requisições em aberto! (dados PIX: ${ dto })`);
}

export default {
   requestPixNotFound,
   unknownRequestingUser,
   maxPixRequestException,
}