import Sign from "../resources/sign/sign"
import SignInDto from "../resources/sign/signIn.dto";

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

   public async signIn(dto: SignInDto)
   {
      return this.signService.signIn(dto);
   }

   public signUp(nickName: string, password: string): void
   {

   }

   public signOut(nickName: string, password: string): void
   {

   }

}