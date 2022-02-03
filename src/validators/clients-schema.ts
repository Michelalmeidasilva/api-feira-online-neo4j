import Joi from 'joi';

import { validateSchema } from '../middleware/validate-schema';

const ClientsValidator = {
  create: () =>
    validateSchema({
      body: {
        cpf: Joi.string().required().min(3),
        name: Joi.string().required(),
        email: Joi.string().email().required()
      }
    })
};

export default ClientsValidator;
