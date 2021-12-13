import { Router } from 'express';

import payPix from '../handlers/pix/payPix';
import { paidPix, receivedPix, pixTransations } from '../handlers/pix/queryPix';
import requestPix from '../handlers/pix/requestPix';


export default class PixRouter
{   
   public static createRoutes(router: Router): void
   {
      router.post('/pix/payPix', payPix);

      router.post('/pix/requestPix', requestPix);

      router.get("/pix/paidPix", paidPix);

      router.get("/pix/receivedPix", receivedPix);

      router.get("/pix/pixTransactions", pixTransations);
   }
}


