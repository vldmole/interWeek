import { getRepository } from "typeorm";
import { PixDto } from "../dtos/Pix.dto";
import { Pix } from "../entity/pix";
import pixExceptions from "../exceptions/pixExceptions";
import userCrud from "../../user/services/crud";

//-------------------------------------------------------------------
export async function create(dto: PixDto): Promise<Pix>
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
   return save(pix);
}

//-------------------------------------------------------------------
export async function save(pix: Partial<Pix>): Promise<Pix>
{
   const pixRepository = getRepository(Pix);
   return await pixRepository.save(pix);
}

//-------------------------------------------------------------------
export async function findById(id: string): Promise<Pix | undefined>
{
   const pixRepository = getRepository(Pix);
   return pixRepository.findOne({
      where: {
         id: id
      }
   })
}
//-------------------------------------------------------------------
async function findAllByPayerUser(userId: string): Promise<Pix[]>
{
   const pixRepository = getRepository(Pix);
   return pixRepository.find({
      where: {
         "payingUser": userId
      }
   })
}

//-------------------------------------------------------------------
async function findAllByReceiverUser(userId: string): Promise<Pix[]>
{
   const pixRepository = getRepository(Pix);
   return pixRepository.find({
      where: {
         receiverUser: userId
      }
   })
}
//-------------------------------------------------------------------
export default {
   create,
   findAllByPayerUser,
   findAllByReceiverUser,
   findById,
   save,
}