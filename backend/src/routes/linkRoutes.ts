import express from 'express'
import { share } from '../controller/linksController'
import { shareLink } from '../controller/linksController'
import { middleware } from '../middleware'

export const linkRouter=express.Router()

linkRouter.post('/share', middleware, share)
linkRouter.get('/share/:shareLink', shareLink)