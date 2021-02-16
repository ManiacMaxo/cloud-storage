import { Request, Response } from 'express'

export const authorize = (req: Request, res: Response, next: Function) => {
    if (!req.headers.authorization) {
        console.log('unauthorized access')
        return res.sendStatus(401)
    }
    console.log(req.headers)
    next()
}

export const login = (req: Request, res: Response, next: Function) => {}

export const createToken = (req: Request, res: Response, next: Function) => {}
