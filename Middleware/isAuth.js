import jwt from 'jsonwebtoken';
import config from 'config';

const isAuth = (req, res, next) => {
const token = req.header('x-jwt');
if(!token) {
    const error = new Error('Not Authorized');
    error.statusCode = 401;
    throw error;
}
try{
    req.user = jwt.verify(token, config.get('connection-config.JWT'));
}
catch (e) {
    if(!e.statusCode){
        e.statusCode = 401;
        throw e;
    }

}
}