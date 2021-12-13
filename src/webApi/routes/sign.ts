import { Router } from 'express';

import signIn from '../handlers/sign/signIn';
import signUp from '../handlers/sign/signUp';
import signOut from '../handlers/sign/signOut';

export default class SignRouter
{   
   public static createRoutes(router: Router): void
   {
      router.get('/sign/signin', signIn);
      router.post('/sign/signIn', signIn);

      router.get('/sign/signUp', signUp);
      router.post('/sign/signUp', signUp);

      router.get('/sign/signOut', signOut);
      router.post('/sign/signOut', signOut);
   }
}


