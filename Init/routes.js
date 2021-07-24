import helmet from "helmet";
import authRouter from "../Routes/auth.js";
import express from "express";

export default app => {
    app.use(helmet());
    app.use(express.json());
    app.use(authRouter);

    app.use((err,req,res,next) => {
        if(err){
            console.log(err.statusCode);
            res.status(500).json({
                message: 'Error',
                error: err.message
            })
        }
    });

}
