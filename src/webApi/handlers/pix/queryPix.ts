import { Request, Response } from "express";

import Api from '../../../application/public/api';
import exceptions from "../../exceptions/exceptions";
const api = Api.getInstance();

function extractUserId(req: Request): string
{
   const dto = req.body;
   const userId = dto.userId;
   if (!userId)
      throw exceptions.InvalidParametersException([{ name: "userId", value: userId }]);
   
   return userId;
}

export async function paidPix(req: Request, res: Response)
{
   const result = await api.paidPix(extractUserId(req));
   
   res.status(200).json(result);
}

export async function receivedPix(req: Request, res: Response) 
{
   const result = await api.receivedPix(extractUserId(req));
   
   res.status(200).json(result);
}

export async function pixTransations(req: Request, res: Response) 
{
   const result = await api.pixTransations(extractUserId(req));

   res.status(200).json(result);
}