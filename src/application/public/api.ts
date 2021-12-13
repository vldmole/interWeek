import Sign from "../resources/sign/sign"
import { SignInDto, SignInResultDto } from "../resources/sign/dtos/signIn.dto";
import { SignUpDto, SignUpResultDto } from "../resources/sign/dtos/signUp.dto";

import { PixRequestDto } from "../resources/pix/dtos/PixRequest.dto";
import { PayPixDto } from "../resources/pix/dtos/PayPix.dto";
import pixService from "../resources/pix/services/pixService";

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

   private signService = Sign();

   public async signIn(dto: SignInDto): Promise<SignInResultDto>
   {
      return this.signService.signIn(dto);
   }

   public async signUp(dto: SignUpDto): Promise<SignUpResultDto>
   {
      return this.signService.signUp(dto);
   }

   public signOut(nickName: string, password: string): void
   {

   }

   //---------------------------------------------------------------
   private pixService = pixService;

   public async requestPix(dto: PixRequestDto)
   {
      return this.pixService.requestPix(dto);
   }

   public async payPix(dto: PayPixDto)
   {
      return this.pixService.payPix(dto);
   }

   public async pixTransations(userId: string)
   {
      return this.pixService.pixTransations(userId);
   }

   public async paidPix(userId: string)
   {
      return this.pixService.paidPix(userId);
   }

   public async receivedPix(userId: string)
   {
      return this.pixService.receivedPix(userId);
   }

   //---------------------------------------------------------------

}