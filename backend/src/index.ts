import express from 'express'
import cors from 'cors'
import { userRouter } from './routes/userRoutes'
import { contentRouter } from './routes/contentRoutes'
import { linkRouter } from './routes/linkRoutes'

const app=express()

const port=8000

app.use(cors())
app.use(express.json())

app.use('/', userRouter)
app.use('/', contentRouter)
app.use('/', linkRouter)


app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})

