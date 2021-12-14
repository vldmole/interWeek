
import userCrud from "../../user/services/crud";
import { PixRequestDto } from "../dtos/incoming/pixRequest.dto";
import pixCrud from "./pixRequestCrud";
import pixQuery from "./queryPixRequest"
import pixRequestExceptions from "../exceptions/pixRequestExceptions";
import pixKeyCodec from "../../pix/util/pixKey.codec";


export async function requestPix(dto: PixRequestDto): Promise<string>
{
   const openRequests = await pixQuery.findAllStatusOpenByUser(dto.userId)
   if (openRequests.length > 10)
      throw pixRequestExceptions.maxPixRequestException(dto);
   
   const user = await userCrud.findById(dto.userId);
   if (!user)
      throw pixRequestExceptions.unknownRequestingUser(dto);
   
   const pixRequest = {
      status: "open",
      requestingUser: user,
      value: dto.value
   }

   const register = await pixCrud.save(pixRequest);

   return pixKeyCodec.encodePixKey(user.id, dto.value, register.id);
}