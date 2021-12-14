import { Request, Response, NextFunction } from "express"


export function authRequired(req: Request, res: Response, next: NextFunction)
{
   if (!req.headers.authorization)
      res.status(401).send("Autorização requerida");
   
   next();
}