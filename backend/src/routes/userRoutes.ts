import express from 'express'
import { signIn } from '../controller/userController'
import { signUp } from '../controller/userController'
import { logout } from '../controller/userController'

export const userRouter=express.Router()

userRouter.post('/signUp', signUp)
userRouter.post('/signIn', signIn)
userRouter.post('/logout', logout)