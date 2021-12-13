import { getRepository } from "typeorm";
import { PixRequestDto } from "../dtos/PixRequest.dto";
import { PixRequest } from "../entity/pixRequest";

//-------------------------------------------------------------------
export async function create(dto: PixRequestDto): Promise<PixRequest>
{
   const userRepository = getRepository(PixRequest);
   return userRepository.save(dto);
}

//-------------------------------------------------------------------
export async function save(pixRequest: Partial<PixRequest>): Promise<PixRequest>
{
   const userRepository = getRepository(PixRequest);
   return userRepository.save(pixRequest);
}

//-------------------------------------------------------------------
export async function findById(id: string): Promise<PixRequest | undefined>
{
   const userRepository = getRepository(PixRequest);
   return userRepository.findOne({
      where: {
         id: id
      }
   })
}

//-------------------------------------------------------------------
async function findByStatus(status: string): Promise<PixRequest[]>
{
   const userRepository = getRepository(PixRequest);
   return userRepository.find({
      where: {
         status: status
      }
   })
}

//-------------------------------------------------------------------
async function findAllStatusOpen(): Promise<PixRequest[]>
{
   return findByStatus('Open');
}

//-------------------------------------------------------------------
async function findAllStatusOpenByUser(userId: string): Promise<PixRequest[]>
{
   const userRepository = getRepository(PixRequest);
   return userRepository.find({
      where: {
         id: userId,
         status: 'Open'
      }
   })
}

//-------------------------------------------------------------------
async function findAllStatusClosed(): Promise<PixRequest[]>
{
   return findByStatus('Closed');
}

//-------------------------------------------------------------------
async function findAllStatusClosedByUser(userId: string): Promise<PixRequest[]>
{
   const userRepository = getRepository(PixRequest);
   return userRepository.find({
      where: {
         id: userId,
         status: 'Closed'
      }
   })
}

//-------------------------------------------------------------------
export default {
   create,
   findAllStatusOpen,
   findAllStatusOpenByUser,
   findAllStatusClosed,
   findAllStatusClosedByUser,
   findById,
   save,
}