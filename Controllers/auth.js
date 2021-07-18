import User from "../Models/User.js";
import bcrypt from 'bcryptjs';
export const signUpHandler = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const relationship = req.body.relationship;
    try{
        const user = await User.findOne({email});
        if(user){
            throw new Error('User already exists');
        }

    }
    catch (e) {
        next(e.message);
    }

}