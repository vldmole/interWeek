import { getRepository } from "typeorm";
import { IPixDto } from "../dtos/incoming/Pix.dto";
import { Pix } from "../entity/pix";
import pixExceptions from "../exceptions/pixExceptions";
import userCrud from "../../user/services/crud";

//-------------------------------------------------------------------
export async function create(dto: IPixDto): Promise<Pix>
{
   const payingUser = await userCrud.findById(dto.payingUser);
   if (!payingUser)
      throw pixExceptions.unknownPayingUser(dto.payingUser);
   
   const receiverUser = await userCrud.findById(dto.receiverUser);
   if (!receiverUser)
      throw pixExceptions.unknownReceivingUser
   
   const pix = {
      status: dto.status,
      payingUser,
      receiverUser,
      value: dto.value
   }

   const pixRepository = getRepository(Pix);
   return pixRepository.save(pix);
}

//-------------------------------------------------------------------
export async function save(pix: Partial<Pix>): Promise<Pix>
{
   const pixRepository = getRepository(Pix);
   return pixRepository.save(pix);
}

//-------------------------------------------------------------------
async function findById(id: string | undefined): Promise<Pix | undefined>
{
   if (!id)
      return undefined;
   
   const pixRepository = getRepository(Pix);
   return pixRepository.findOne({
      where: {
         id: id
      }
   })
}

//-------------------------------------------------------------------
export default {
   create,
   findById,
   save,
}