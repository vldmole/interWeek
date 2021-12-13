import { Request, Response, NextFunction } from 'express';
import Api from '../../../application/public/api';

const api = Api.getInstance();

export default async function signIn(req: Request, res: Response)
{
   console.log(req.body);
   const dto = req.body;
   const result = await api.signIn({ email: 'pedro@paulo.malazarte.com', password: '123' });
   console.log(10 + result);
   res.status(200).send(result);
}



