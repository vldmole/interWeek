import { NextFunction, Request, Response } from "express";



function globalErrorHandler(err: Error, req: Request, res: Response, next: NextFunction)
{
   if (err)
      return res.status(500).json(err);
   
   return res.status(500).json({
      message: 'Unknown Internal Server Error'
   });
}

export { globalErrorHandler as globalError };