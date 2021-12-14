import { Request, Response } from 'express';
import Api from '../../../application/public/api';
import auth from "../util/authToken";


const api = Api.getInstance();

export default async function requestPix(req: Request, res: Response)
{
   const token = auth.extractAuthToken(req);
   const dto = req.body;
   const result = await api.requestPix(dto, token);

   res.status(200).send(result);
}