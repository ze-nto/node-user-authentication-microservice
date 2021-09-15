require('dotenv').config();
import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import JWT from 'jsonwebtoken';
import basicAuthentication from "../middlewares/basic-authentication.middleware";
import ForbiddenError from "../models/errors/forbidden.error.model";


const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthentication, async (req: Request, res: Response, next: NextFunction) => {

    try {
        const user = req.user;

        if( !user ){
            throw new ForbiddenError('Usuário não informado.');
        }

        const jwt = JWT.sign(
            { username: user.username }, 
            process.env.JWT_SECRET as string, 
            { subject: user?.uuid });

        res.status(StatusCodes.OK).json({ token: jwt})


    } catch (error) {
        next(error);  
    }


})


export default authorizationRoute;