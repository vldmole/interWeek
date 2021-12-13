import Exception from "../../../Exceptions/Exception";
import { PayPixDto } from "../dtos/PayPix.dto";

function unknownPayingUser(id: string)
{
   return new Exception(500, `Pagador desconhecido! (id: ${ id })`);
}

function unknownReceivingUser(id: string)
{
   return new Exception(500, `Recebedor desconhecido! (id: ${ id })`);
}

function insufficientMallet(dto: PayPixDto)
{
   return new Exception(500, `Saldo insuficient! (dados PIX: ${ dto })`);
}

export default {
   unknownPayingUser,
   unknownReceivingUser,
   insufficientMallet,
}