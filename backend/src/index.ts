import express from 'express'
import cors from 'cors'
import { userRouter } from './routes/userRoutes'
import { contentRouter } from './routes/contentRoutes'

const app=express()

const port=8000

app.use(cors())
app.use(express.json())

app.use('/', userRouter)
app.use('/', contentRouter)


app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})

