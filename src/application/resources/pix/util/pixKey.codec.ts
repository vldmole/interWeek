import { encode, decode } from 'js-base64'

function encodePixKey(userId: string, value: number, registeredId: string)
{
   const codedUserID = encode(userId);
   const codedValue  = encode(value.toString());
   const codedRegisteredId = encode(registeredId);

   return `${ codedUserID }-${ codedValue }-${ codedRegisteredId }`
}

function decodePixKey(key: string)
{
   const keys = key.split('-');
   const userId = decode(keys[0]);
   const value = Number.parseFloat(decode(keys[1]));
   const registeredId = decode(keys[2]);

   return {
      userId,
      value,
      registeredId
   }
}

export default {
   encodePixKey,
   decodePixKey
}