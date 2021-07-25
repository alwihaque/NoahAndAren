import User from "../Models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pick from 'lodash/pick.js';
import config from 'config';
export const signUpHandler = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    let user = await User.findOne({email: email});
    if(user){
        const error = new Error('User already exists');
        error.statusCode = 401;
        throw error;
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    user = new User({
        email,
        password: hashedPassword
    });
    await user.save();
    const token = jwt.sign({
        userId: user._id,
    },config.get('connection-config.JWT'),{expiresIn: '1h'});
    res.status(201).header('x-jwt', token).json({
        message: 'User Successfully Created',
        user: pick(user, ['email','_id'])
    });
};
export const signInHandler = async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    let user = await User.findOne({email: email});
    if(!user){
        const error = new Error('Invalid email or password');
        error.statusCode = 401;
        throw error;
    }
    const isValid = await bcrypt.match(user.password, password);
    if(!isValid){
        const error = new Error('Invalid email or password');
        error.statusCode = 401;
        throw error;
    }
    const token = await jwt.sign({
        userId: user._id
    }, config.get('connection-config.JWT'),{expiresIn: '1h'});
    res.status(200).header('x-jwt', token).json({
        message: 'User Logged In',
        user: pick(user, ['email','_id'])
    });

};