import userRouter from "#Routes/user.routes.js";
import express from "express";

const expressApp = express()

expressApp.listen()

// Middlewares
expressApp.use(express.json())

// Routes
expressApp.use('/user', userRouter)

export default expressApp