import express from 'express'
import { allContent } from '../controller/contentController'
import { createContent } from '../controller/contentController'
import { updateContent } from '../controller/contentController'
import { deleteContent } from '../controller/contentController'
import { middleware } from '../middleware'

export const contentRouter=express.Router()

contentRouter.post('/createContent', middleware, createContent)
contentRouter.get('/allContent',middleware, allContent)
contentRouter.put('/updateContent', middleware, updateContent)
contentRouter.delete('/deleteContent', middleware, deleteContent)

