import { User } from "../../user/entity/user";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth.config";
import { SignInResultDto } from "../dtos/signIn.dto";
import moment from "moment";


function createWebToken(user: User): SignInResultDto
{
   const { secret, expiresIn } = authConfig.jwt;

   const token = jwt.sign({
      firstName: user.firstName,
      midleName: user.midleName,
      lastName: user.lastName,
      accountNumber: user.accountNumber,
      mallet: user.mallet,
   },
      secret,
      {
         subject: user.id,
         expiresIn
      });
   
   
   return {
      accessToken: token,
      expiresIn: expiresIn
   }
}

export default {
   createWebToken,
}
