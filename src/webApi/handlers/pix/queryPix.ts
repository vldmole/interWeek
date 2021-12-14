import { Request, Response } from "express";

import Api from '../../../application/public/api';
import exceptions from "../../exceptions/exceptions";
import { IQueryPixDto } from "../../../application/resources/pix/dtos/incoming/queryPix.dto"
const api = Api.getInstance();

function extractQueryDto(req: Request): IQueryPixDto
{
   const dto = req.body as IQueryPixDto;
   if (!dto)
      throw exceptions.InvalidParametersException([{ name: 'Dto', value: dto }])
   
   if (!dto.userId)
      throw exceptions.InvalidParametersException([{ name: "userId", value: dto.userId }]);
   
   return dto;
}

function extractAuthToken(req: Request):string
{
   const auth = req.headers.authorization;
   if (!auth)
      throw exceptions.undefinedAuthorizationToken();
   
   const [, token] = auth.split(' ');
   return token;
}

export async function paidPix(req: Request, res: Response)
{
   const dto = extractQueryDto(req);
   const token = extractAuthToken(req);
   
   const result = await api.paidPix(dto, token);
   
   res.status(200).json(result);
}

export async function receivedPix(req: Request, res: Response) 
{
   const dto = extractQueryDto(req);
   const token = extractAuthToken(req);

   const result = await api.receivedPix(dto, token);
   
   res.status(200).json(result);
}

export async function pixTransations(req: Request, res: Response) 
{
   const dto = extractQueryDto(req);
   const token = extractAuthToken(req);

   const result = await api.pixTransations(dto, token);

   res.status(200).json(result);
}