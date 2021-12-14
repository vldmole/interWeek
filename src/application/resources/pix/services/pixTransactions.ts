import queryPix from "./queryPix";
import { IQueryPixDto } from "../dtos/incoming/queryPix.dto";

import PaidPixData from "../dtos/outcoming/PaidPixData.dto";
import ReceivedPixData from "../dtos/outcoming/receivedPixData.dto";


//-------------------------------------------------------------------------------------------------------------
async function paidPix(dto: IQueryPixDto): Promise<PaidPixData[]>
{
   const vPix = await queryPix.findAllByPayerUser(dto);
   return vPix.map(pix => (
      {
         id: pix.id,
         value: pix.value,
         date: new Date(pix.createdAt),
         to: pix.receiverUser.completeName()
      })
   )
   .sort((pixA, pixB) => (pixA.date.getTime() - pixB.date.getTime()));
}

//-------------------------------------------------------------------------------------------------------------
async function receivedPix(dto: IQueryPixDto):Promise<ReceivedPixData[]>
{
   const vPix = await queryPix.findAllByReceiverUser(dto);
   return vPix.map(pix => (
      {
         id: pix.id,
         value: pix.value,
         date: new Date(pix.createdAt),
         from: pix.payingUser.completeName()
      })
   )
   .sort((pixA, pixB) => (pixA.date.getTime() - pixB.date.getTime()));
}

//-------------------------------------------------------------------------------------------------------------
async function pixTransations(dto: IQueryPixDto): Promise<{ paid:PaidPixData[], received: ReceivedPixData[] }>
{
   const paidPixResult = await paidPix(dto);
   const receivedPixResult = await receivedPix(dto);
   
   return { paid: paidPixResult, received: receivedPixResult };
}

//-------------------------------------------------------------------------------------------------------------
export default {
   paidPix,
   receivedPix,
   pixTransations,
}