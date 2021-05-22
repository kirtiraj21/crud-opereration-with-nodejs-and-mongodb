import bcrypt from "bcryptjs";

import jwt from 'jsonwebtoken';

import portfolioSchema, { IPortfolio } from '../models/portfolio';
import { Alert } from '../constants/alertmessageConstants';

export class PortfolioService {

    public static async getPortfolio() {
        const userdata = await portfolioSchema.find();
        return userdata;
    }

    public static async postPortfolio(userdata: IPortfolio, userfile: any): Promise<void | String> {
        const files = userfile.map(function (val: { originalname: String; }) {
            return val.originalname;
        });
        const user = new portfolioSchema({
            name: userdata.name,
            image: files.toString()
        });
        await user.save();
        return Alert.insert_success;

    }


}
