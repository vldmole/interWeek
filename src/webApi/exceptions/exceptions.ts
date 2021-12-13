import Exception from "../../application/Exceptions/Exception";

export function InvalidParametersException(par: [{name: string, value:string|undefined}])
{
   return new Exception(401, "Parâmetros Inválidos", par.toString())
}

export default {
   InvalidParametersException,
}