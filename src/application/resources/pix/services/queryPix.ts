import { getRepository } from "typeorm";
import { Pix } from "../entity/pix";
import { IQueryPixDto } from "../dtos/incoming/queryPix.dto"

//----------------------------------------------------------------------
async function findAllByPayerUser(dto: IQueryPixDto): Promise<Pix[]>
{
   //to do query builder
   const pixRepository = getRepository(Pix);
   return pixRepository.find({
      where: {
         "payingUser": dto.userId
      }, relations: ['receiverUser']
   })
}

//----------------------------------------------------------------------
async function findAllByReceiverUser(dto: IQueryPixDto): Promise<Pix[]>
{
   //to do query builder
   const pixRepository = getRepository(Pix);
   return pixRepository.find({
      where: {
         receiverUser: dto.userId
      }, relations: ['payingUser']
   })
}

//----------------------------------------------------------------------
export default {
   findAllByPayerUser,
   findAllByReceiverUser
}