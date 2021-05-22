import express from 'express';

import { PortfolioController } from '../controllers/portfolioController';
import { fileUpload } from '../middlewares/uploadfileMiddleware';
import { authenticateJWT } from '../middlewares/authMiddleware';

export const portfolioRoute = express.Router();

portfolioRoute.get('/', authenticateJWT, PortfolioController.getPortfolio);

portfolioRoute.post('/', authenticateJWT, fileUpload.array('images'), PortfolioController.postPortfolio);
