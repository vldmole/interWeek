export default class Exception
{
   constructor(
      public statusCode: number,
      public message: string,
      public data?: any )
   {
      //todo   
   }
}