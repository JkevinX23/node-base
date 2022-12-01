import { Router } from 'express'
import BaseController from './app/contollers/BaseController'

const routes = new Router()

routes.post('/base/store', BaseController.store)
routes.get('/base/index', BaseController.index)
routes.put('/base/update', BaseController.update)

export default routes
