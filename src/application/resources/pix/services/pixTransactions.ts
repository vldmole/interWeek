import { PixQueryResult } from "../dtos/PixQueryResult.dto";
import { Pix } from "../entity/pix";
import pixCrud from "./pixCrud";

  
export async function paidPix(userId: string): Promise<Pix[]>
{
   return await pixCrud.findAllByPayerUser(userId);
}

export async function receivedPix(userId: string): Promise<Pix[]>
{
   return await pixCrud.findAllByReceiverUser(userId);
}

export async function pixTransations(userId: string): Promise<{ paidPix: Pix[], receivedPix: Pix[] }>
{
   const paidPixResult = await paidPix(userId);
   const receivedPixResult = await receivedPix(userId);

   return { paidPix: paidPixResult, receivedPix: receivedPixResult };
}