import { JWT_SECRET } from "@/config"
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"]

    if (!authHeader) {
        return next()
    }

    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        res.status(403).json({ message: "Invalid token" })
        return
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" })

        req.user = user
        next()
    })
}