import { Request, Response } from 'express';
import Api from '../../../application/public/api';
import auth from "../util/authToken"

export default async function requestPix(req: Request, res: Response)
{
   const token = auth.extractAuthToken(req);
   const pixKey = req.body.pixKey;
   
   const result = await Api.getInstance().payPix(pixKey, token);

   res.status(200).send(result);
}