import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js'
import errorHandler from './middleware/errorHandler.js';
import reservationRouter from './routes/reservationRoute.js';
dotenv.config({path: './.env'});

const app = express();
connectDB()

app.use(cors({
    origin:[process.env.Fronted_URI],
    methods:['POST'],
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('error',errorHandler)
app.use('/api/v1/reservation',reservationRouter)




export default app;