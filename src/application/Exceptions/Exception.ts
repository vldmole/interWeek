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

const unknownException = new Exception(500, "Ocorreu um erro inesperado no servidor!");
export
{
   unknownException
}