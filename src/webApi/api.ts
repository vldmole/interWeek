import Express from 'express';
import 'express-async-errors';
import { globalError } from './midlewares/globalError';
import Sign from './routes/sign';

async function create()
{
   const app: Express.Application = Express();
   app.use(Express.json());
   

   Sign.createRoutes(app);

   app.get('/', (req: Express.Request, res: Express.Response) => res.send("Hello World"));
   app.listen(3000, () => console.log("Server is listen"));

   app.use(globalError);
}

export default {
   create
}







