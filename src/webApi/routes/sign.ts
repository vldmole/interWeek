import { Router } from 'express';

import signIn from '../handlers/sign/signIn';
import signUp from '../handlers/sign/signUp';
import signOut from '../handlers/sign/signOut';

export default class SignRouter
{   
   public static createRoutes(router: Router): void
   {
      router.post('/sign/signIn', signIn);

      router.post('/sign/signUp', signUp);

      router.post('/sign/signOut', signOut);
   }
}


