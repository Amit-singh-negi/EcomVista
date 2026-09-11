import express from 'express'

import {placeOrder,placeOrderRazorpay,allOrders,verifyRazorpay,userOrders,updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
const orderRouter = express.Router()

// admin features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment Feature
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)
// verify payment
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)

// User Feature

orderRouter.post('/userOrders',authUser,userOrders)

export default orderRouter;