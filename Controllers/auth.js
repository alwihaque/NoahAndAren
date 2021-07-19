import User from "../Models/User.js";
import bcrypt from 'bcryptjs';
export const signUpHandler = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const relationship = req.body.relationship;
    try{
        let user = await User.findOne({email});
        if(user){
            console.log('User exists');
            throw new Error('User already exists');
        }
        const hp = await bcrypt.hash(password, 12);
       user = new User({
           email,
           password: hp,
           firstName: firstName,
           lastName: lastName,
           posts:[],
           tag: [],
           relationship: relationship
       });

       await user.save();

    }
    catch (e) {
        next(e.message);
    }

}