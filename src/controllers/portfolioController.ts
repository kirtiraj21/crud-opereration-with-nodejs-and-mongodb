import { Request, Response } from 'express';

import { PortfolioService } from '../services/portfolioService';

export class PortfolioController {

    public static getPortfolio = async (req: Request, res: Response): Promise<Response> => {
        try {
            const userdata = await PortfolioService.getPortfolio();
            return res.status(200).json({ "message": "Get student successfully", "data": userdata });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    public static postPortfolio = async (req: Request, res: Response): Promise<Response> => {
        try {
            const studentServiceResponse = await PortfolioService.postPortfolio(req.body, req.files);
            return res.status(200).json({ "message": studentServiceResponse });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }

    constructor() { }
}
