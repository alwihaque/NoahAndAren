import {Router} from "express";
import {signUpHandler} from "../Controllers/auth.js";

const router = Router();


router.post('/sign-up',signUpHandler);



export default router;