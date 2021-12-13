import { Request, Response } from 'express';
import Api from '../../../application/public/api';


const api = Api.getInstance();

export default async function signIn(req: Request, res: Response)
{
   const dto = req.body;
   const result = await api.signIn(dto);
   
   res.status(200).send(result);
}



