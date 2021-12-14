import { User } from "../../user/entity/user";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth.config";
import { SignResultDto } from "../dtos/outcoming/signResult.dto";
import webTokenExceptions from "../exceptions/webTokenExceptions";
import { decode } from "querystring";
import { ITokenPayload } from "./iTokenPayload";

function createWebToken(user: User): SignResultDto
{
   const { secret, expiresIn } = authConfig.jwt;

   const payload = {
      user: {
         firstName: user.firstName,
         midleName: user.midleName,
         lastName: user.lastName,
         accountNumber: user.accountNumber,
         id: user.id
      }
   };

   const token = jwt.sign(payload, secret, {
      algorithm: 'HS256',
      expiresIn: `${ expiresIn }s`
   });
   
   return {
      accessToken: token,
      expiresIn: expiresIn
   }
}

function decodeWebToken(token: string): ITokenPayload
{
   const { secret} = authConfig.jwt;

   try
   {
      const decoded = jwt.verify(token, secret, { algorithms: ['HS256'] }); 
      const authPayload = decoded as ITokenPayload;
      console.log(authPayload);
      return authPayload;
   }
   catch (e)
   {
      throw webTokenExceptions.invalidToken(token);
   }
}


export default {
   createWebToken,
   decodeWebToken,
}
