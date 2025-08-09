import express from 'express'
import { signIn } from '../controller/userController'
import { signUp } from '../controller/userController'
import { logout } from '../controller/userController'
import { middleware } from '../middleware'
import { currentUser } from '../controller/userController'

export const userRouter=express.Router()

userRouter.post('/signUp', signUp)
userRouter.post('/signIn', signIn)
userRouter.get('/currentUser', middleware,currentUser)
userRouter.post('/logout', middleware, logout)