import {Router} from "express";
import {signInHandler, signUpHandler} from "../Controllers/auth.js";
import tryCatchHandler from '../Middleware/tryCatch.js';

const router = Router();


router.post('/sign-up',tryCatchHandler(signUpHandler));
router.post('/sign-in',tryCatchHandler(signInHandler));



export default router;