import { NextFunction, Request, Response } from "express";



function globalError(err: Error, req: Request, res: Response, next: NextFunction)
{
   console.error("7" + err);

   if (err)
      return res.status(500).json(err);
   
   return res.status(500).json({
      message: 'Unknown Internal Server Error'
   });
}

export { globalError };