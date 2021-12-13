import { Request, Response, NextFunction } from 'express';

export default function signUp(req: Request, res: Response, next: NextFunction)
{
   res.status(200).send("signUp ok");
}