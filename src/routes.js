import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (request, response) => {
  const user = await User.create({
    name: 'Luis Felipe',
    email: 'felipedelta0@gmail.com',
    password_hash: '123456789',
  });

  response.json(user);
});

export default routes;
