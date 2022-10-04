/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/clients';

import ClientsValidator from '../validators/clients-schema';

const clients = express.Router();

clients.get('/clients', controller.getAll);

clients.get('/clients/:uuid', controller.get);

clients.put('/clients/:uuid', ClientsValidator.update(), controller.update);

clients.delete(
  '/clients/:uuid',
  ClientsValidator.destroy(),
  controller.destroy
);

clients.post('/clients', ClientsValidator.create(), controller.create);

export default clients;
