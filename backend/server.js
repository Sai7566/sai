import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import connectcloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"
import chatbotRoutes from "./routes/chatbotRoutes.js"


// app config

const app = express()
const port = process.env.Port || 5000
connectDB()
connectcloudinary()

//middleware
app.use(express.json()); // ✅ First
app.use(cors());
app.use('/api/user', userRouter); // ✅ After json middleware
app.use('/api/product',productRouter)
app.use('/api/chatbot',chatbotRoutes);
// app end points
 app.get('/',(req,res)=>{
    res.send("Api Working")
 })
 app.listen(port, console.log('Server is running on PORT :'+ port))