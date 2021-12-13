import { Request, Response, NextFunction } from 'express';

export default function signOut(req: Request, res: Response, next: NextFunction)
{
   res.status(200).send("signOut ok");
}