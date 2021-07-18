import {Router} from "express";
import {signUpHandler} from "../Controllers/auth.js";

const router = Router();
//sign-up route
//log-in route

router.post('/sign-up', [],signUpHandler);



export default router;