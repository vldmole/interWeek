import pixRequestExceptions from "../../requestPix/exceptions/pixRequestExceptions";
import pixPayExceptions from "./pixPayExceptions";

export default {
   ...pixRequestExceptions,
   ...pixPayExceptions
}