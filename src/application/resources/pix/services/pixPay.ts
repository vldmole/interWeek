import { PayPixDto } from "../dtos/PayPix.dto";
import pixExceptions from "../exceptions/pixExceptions"
import pixKeyCodec from "../util/pixKey.codec";

import pixResquestCrud from "./pixRequestCrud";
import { Pix } from "../entity/pix";
import pixCrud from "./pixCrud";
import userCrud from "../../user/services/crud";


export async function payPix(dto: PayPixDto): Promise<Pix>
{
   const requestPixData = pixKeyCodec.decodePixKey(dto.pixKey);

   const pixRequest = await pixResquestCrud.findById(requestPixData.registeredId);
   if (!pixRequest)
      throw pixExceptions.requestPixNotFound(dto.pixKey);

   const payingUser = await userCrud.findById(dto.userId);
   if (!payingUser)
      throw pixExceptions.unknownPayingUser(dto.userId);
   
   const receiverUser = await userCrud.findById(requestPixData.userId)
   if (!receiverUser)
      throw pixExceptions.unknownReceivingUser(requestPixData.userId);

   if (payingUser.mallet < pixRequest.value)
      throw pixExceptions.insufficientMallet(dto);

   payingUser.mallet -= pixRequest.value;
   receiverUser.mallet += pixRequest.value;

   const pixData = {
      status: "Closed",
      payingUser,
      receiverUser,
      value: pixRequest.value
   }

   const pix = await pixCrud.save(pixData);
   
   pixRequest.status = 'Closed'
   pixResquestCrud.save(pixRequest);

   await userCrud.save(payingUser);
   await userCrud.save(receiverUser);

   return pix;
}
