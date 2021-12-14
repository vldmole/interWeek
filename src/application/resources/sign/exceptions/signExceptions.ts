import signInExceptions from "./signInExceptions"
import signUpExceptions from "./signUpExceptions"
import webTokenExceptions from "./webTokenExceptions"


export default {
   ...signInExceptions,
   ...signUpExceptions,
   ...webTokenExceptions, 
}
