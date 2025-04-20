import express from "express"
import { check, login, logout, register } from "../controllers/auth.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const authRouter = express.Router()


authRouter.post("/register", register)
authRouter.post("/login", login)
authRouter.post("/logout", authMiddleware, logout)
authRouter.get("/check", authMiddleware, check)

export default authRouter