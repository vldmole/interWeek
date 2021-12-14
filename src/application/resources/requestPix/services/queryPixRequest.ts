import { getRepository } from "typeorm";
import { PixRequest } from "../entity/pixRequest"
//-------------------------------------------------------------------
async function findByStatus(status: string): Promise<PixRequest[]>
{
   const repository = getRepository(PixRequest);
   return repository.find({
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
async function findAllStatusOpenByUser(userId: string | undefined): Promise<PixRequest[]>
{
   if (!userId)
      return [];
   
   const repository = getRepository(PixRequest);
   return repository.find({
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
   const repository = getRepository(PixRequest);
   return repository.find({
      where: {
         id: userId,
         status: 'Closed'
      }
   })
}

//----------------------------------------
export default {
   findAllStatusOpen,
   findAllStatusOpenByUser,
   findAllStatusClosed,
   findAllStatusClosedByUser,
}