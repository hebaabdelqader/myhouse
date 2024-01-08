
import connectDB from '../DB/connection.js';
import categoriesRouter from './modules/category/categories.router.js'
import authRouter from './modules/auth/auth.router.js'
import subcategoryRouter from './modules/subcategory/subcategory.router.js'

const initApp=(app,express)=>{
    app.use(express.json());
    connectDB();
    app.get('/',(req,res)=>{
        return res.status(200).json({message:"welcome"});
    })

    app.use('/categories',categoriesRouter);
    app.use('/subcategory',subcategoryRouter);
     app.use('/auth',authRouter);
app.get("*",(req,res)=>{
    return res.status(500).json({message:"page not found"});
})
}

export default initApp;