import Exception from "../../../Exceptions/Exception";

function invalidToken(token: string)
{
   return new Exception(501,"Token inválido ou expirado", token);
}

export default {
   invalidToken,
}