
import connectDB from '../DB/connection.js';
import authRouter from './modules/auth/auth.router.js';

 const initApp=(app,express)=>{
    app.use(express.json());
    connectDB();
}
export default initApp;
    


