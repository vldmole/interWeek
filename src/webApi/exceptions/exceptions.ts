import Exception from "../../application/Exceptions/Exception";

export function InvalidParametersException(par: [{name: string, value:any | undefined}])
{
   return new Exception(401, "Parâmetros Inválidos", par.toString())
}

export function undefinedAuthorizationToken()
{
   return new Exception(401, 'Autorização necessária');
}

export default {
   InvalidParametersException,
   undefinedAuthorizationToken,
}