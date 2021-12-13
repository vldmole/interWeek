import signIn from "./signIn.service";
import signUp from "./signUp.service";


export default function Sign()
{
   return {
      signIn,
      signUp,
   }
};