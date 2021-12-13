import { Request, Response } from 'express';
import Api from '../../../application/public/api';


const api = Api.getInstance();

export default async function requestPix(req: Request, res: Response)
{
   const dto = req.body;
   const result = await api.requestPix(dto);

   res.status(200).send(result);
}