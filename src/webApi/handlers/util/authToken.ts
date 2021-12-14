import { Request } from "express";
import exceptions from "../../exceptions/exceptions";

function extractAuthToken(req: Request): string
{
   const authHeader = req.headers.authorization;
   if (!authHeader)
      throw exceptions.undefinedAuthorizationToken();
   
   const [, token] = authHeader.split(' ');

   return token;
}

export default {
   extractAuthToken,
}