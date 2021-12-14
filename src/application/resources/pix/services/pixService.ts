import { requestPix } from "../../requestPix/services/pixRequest";
import { payPix } from "./pixPay";
import pixQueryTransactions from "./pixTransactions";

export default {
   requestPix,
   payPix,
   ...pixQueryTransactions,
}