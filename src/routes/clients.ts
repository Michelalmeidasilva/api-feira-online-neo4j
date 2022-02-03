/** source/routes/posts.ts */
import express from 'express';
import { validateSchema } from '../middleware/validate-schema';
import controller from '../controllers/clients';

import ClientsValidator from '../validators/clients-schema';

const clients = express.Router();

clients.get('/clients', controller.getClient);
// router.get('/movies/:id', controller.getMovies);
// router.put('/movies/:id', controller.updateMovie);
// router.delete('/movies/:id', controller.deleteMovie);
// clients.post('/clients', validateSchema, controller.addClient);
clients.post('/clients', ClientsValidator.create(), controller.addClient);

export default clients;
