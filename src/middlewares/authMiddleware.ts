import jwt from 'jsonwebtoken';

import { Request, Response, NextFunction } from 'express';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, 'sssshhhh', (err: any, user: any) => {
            if (err) {
                return res.json({ 'status': false, 'message': "Unauthorize" });
            }

            //req.user = user;
            next();
        });
    } else {
        // res.sendStatus(401);
        return res.json({ 'status': false, 'message': "Unauthorize" });
    }
};


