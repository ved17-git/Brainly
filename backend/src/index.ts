import express from 'express'
import cors from 'cors'
import { userRouter } from './routes/userRoutes'
const app=express()

const port=8000

app.use(cors())
app.use(express.json())

app.use('/', userRouter)


app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})

