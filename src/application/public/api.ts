import Sign from "../resources/sign/services/sign"
import { SignInDto } from "../resources/sign/dtos/incoming/signIn.dto";
import { SignUpDto } from "../resources/sign/dtos/incoming/signUp.dto";
import { SignResultDto } from "../resources/sign/dtos/outcoming/signResult.dto";

import { PixRequestDto } from "../resources/requestPix/dtos/incoming/pixRequest.dto";
import { IPayPixDto } from "../resources/pix/dtos/incoming/PayPix.dto";
import pixService from "../resources/pix/services/pixService";

import authManager from "../resources/auth/services/authCheck";
import { IQueryPixDto } from "../resources/pix/dtos/incoming/queryPix.dto";

export default class Api
{
   private static api: Api | null;
   
   private Api()
   {
      /* todo */
   }
   
   public static getInstance()
   {
      if (!Api.api)
         Api.api = new Api();
      
      return Api.api;
   }
   //------------------------------------

   //------------------------------------
   private signService = Sign();

   public async signIn(dto: SignInDto): Promise<SignResultDto>
   {
      return await this.signService.signIn(dto);
   }

   public async signUp(dto: SignUpDto): Promise<SignResultDto>
   {
      return await this.signService.signUp(dto);
   }

   public signOut(nickName: string, password: string): void
   {

   }

   //---------------------------------------------------------------
   private pixService = pixService;

   public async requestPix(value: number, token:string)
   {
      const user = authManager.check(token, 'requestPix');
      
      const dto = {
         userId: user.id,
         value: value,
      }

      return this.pixService.requestPix(dto);
   }

   public async payPix(pixKey: string, token: string)
   {
      const user = authManager.check(token, 'payPix');
      const dto = {
         pixKey: pixKey,
         userId: user.id,
      }
      return this.pixService.payPix(dto);
   }

   public async pixTransations(dto: IQueryPixDto, token: string)
   {
      authManager.check(token, 'pixTransations');
      return this.pixService.pixTransations(dto);
   }

   public async paidPix(dto: IQueryPixDto, token: string)
   {
      authManager.check(token, 'paidPix');
      return this.pixService.paidPix(dto);
   }

   public async receivedPix(dto: IQueryPixDto, token: string)
   {
      authManager.check(token, 'receivedPix');
      return this.pixService.receivedPix(dto);
   }

   //---------------------------------------------------------------
}