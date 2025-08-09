import express from 'express'
import { allContent, twitterContent, youtubeContent } from '../controller/contentController'
import { createContent } from '../controller/contentController'
import { deleteContent } from '../controller/contentController'
import { middleware } from '../middleware'

export const contentRouter=express.Router()

contentRouter.post('/createContent', middleware, createContent)
contentRouter.get('/allContent',middleware, allContent)
contentRouter.delete('/deleteContent', middleware, deleteContent)

contentRouter.get('/youtubeContent',middleware, youtubeContent)

contentRouter.get('/twitterContent',middleware, twitterContent)

