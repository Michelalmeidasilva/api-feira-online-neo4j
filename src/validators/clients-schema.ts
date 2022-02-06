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
    }),
  destroy: () =>
    validateSchema({
      headers: {
        uuid: Joi.string().required().min(3)
      }
    }),
  update: () =>
    validateSchema({
      body: {
        name: Joi.string().required()
      },
      headers: {
        uuid: Joi.string().required().min(3)
      }
    })
};

export default ClientsValidator;
