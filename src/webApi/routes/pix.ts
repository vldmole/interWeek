import { Router } from 'express';

import payPix from '../handlers/pix/payPix';
import { paidPix, receivedPix, pixTransations } from '../handlers/pix/queryPix';
import requestPix from '../handlers/pix/requestPix';
import { authRequired } from "../midlewares/requireAuth"


export default class PixRouter
{   
   public static createRoutes(router: Router): void
   {
      router.post('/pix/payPix', authRequired, payPix);

      router.post('/pix/requestPix', authRequired, requestPix);

      router.get("/pix/paidPix", authRequired, paidPix);

      router.get("/pix/receivedPix", authRequired, receivedPix);

      router.get("/pix/pixTransactions", authRequired, pixTransations);
   }
}


