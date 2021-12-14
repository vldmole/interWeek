import Exception from "../../../Exceptions/Exception";

//------------------------------------------------------------------------
function tokenRequired(token: string)
{
   return new Exception(401, 'Token de autorização requerido!', token);
}

//------------------------------------------------------------------------
function invalidAuthData(token: string)
{
   return new Exception(401, 'Dados de autorização inválidos!', token);
}

//------------------------------------------------------------------------
function userNotAuthorized(userId: string | undefined)
{
   return new Exception(401, 'Usuário não autorizado!', userId);
}

//------------------------------------------------------------------------
export default {
   tokenRequired,
   invalidAuthData,
   userNotAuthorized,
}