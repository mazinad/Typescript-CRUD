import Express,{Application} from 'express';
import * as dotenv from 'dotenv';
import {connectToDB} from './src/connection/db.connection';
import index from './src/routes/index';
dotenv.config();
connectToDB();
const port = process.env.PORT || 3001;
const app:Application = Express();
app.use('/api/v2',index);
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
