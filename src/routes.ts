import { Router } from 'express'
import { userController } from './users';

const routes = Router();

routes.post('/users', userController.createOne);

export { routes }