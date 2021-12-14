import Exception from "../../../Exceptions/Exception";
import { IPayPixDto } from "../dtos/incoming/PayPix.dto";

function unknownPayingUser(id: string | undefined)
{
   return new Exception(500, `Pagador desconhecido! (id: ${ id })`);
}

function unknownReceivingUser(id: string | undefined)
{
   return new Exception(500, `Recebedor desconhecido! (id: ${ id })`);
}

function insufficientMallet(dto: IPayPixDto)
{
   return new Exception(500, `Saldo insuficient! (dados PIX: ${ dto })`);
}

export default {
   unknownPayingUser,
   unknownReceivingUser,
   insufficientMallet,
}