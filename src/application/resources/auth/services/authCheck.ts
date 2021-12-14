import { User } from "../../user/entity/user";
import webToken from "../../sign/util/webToken";
import { ITokenPayload } from "../../sign/util/iTokenPayload";
import authExceptions from "../exceptions/authExceptions";


//-----------------------------------------------------------
function checkSigned(token: string): ITokenPayload
{
   if (!token)
      throw authExceptions.tokenRequired(token);
   console.log(12, token);
   const authPayload = webToken.decodeWebToken(token);
   if(authPayload && authPayload.user)
      return authPayload;
   console.log(16);
   throw authExceptions.invalidAuthData(token);
}

//-----------------------------------------------------------
function check(token: string, operation: string): Partial<User>
{
   if (operation === "signIn" || operation === "signUp")
      return new User;
   
   const authPayload = checkSigned(token);

   checkUserAuthForOperation(operation, authPayload.user.id);
   
   return authPayload.user;
}
//----------------------------------------------------------------------------------------

function checkUserAuthForOperation(operation: string, userId: string | undefined)
{
   if (!userId)
      throw authExceptions.userNotAuthorized(userId);
   //to do
   //access the banck and veify permissions
}

//-----------------------------------------------------------
export default {
   check,
}