import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const app = express()
const PORT = process.env.PORT || 4000

connectDB()
connectCloudinary()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// api end points
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

// checking api health 
app.get('/',(req,res)=>{
    res.send('Api Working ')
})

app.listen(PORT,()=> console.log('server started on port : ', PORT))