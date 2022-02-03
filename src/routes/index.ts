import express from 'express';

import movies from './movies';
import products from './products';
import clients from './clients';

const router = express.Router();

router.use(movies);
router.use(clients);
router.use(products);

export default router;
