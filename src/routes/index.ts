import express from 'express';

import { studentsRoute } from './students';
import { portfolioRoute } from './portfolio';

export const router = express.Router();

router.use('/students', studentsRoute);
router.use('/portfolio', portfolioRoute);

