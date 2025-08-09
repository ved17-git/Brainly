import express from 'express'
import cors from 'cors'
import { userRouter } from './routes/userRoutes'
import { contentRouter } from './routes/contentRoutes'
import { linkRouter } from './routes/linkRoutes'
import serverless from 'serverless-http';
require('dotenv').config()

const app=express()

const port=process.env.PORT

app.use(cors())
app.use(express.json())

app.use('/', userRouter)
app.use('/', contentRouter)
app.use('/', linkRouter)

export const handler = serverless(app); 
