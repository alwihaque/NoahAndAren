import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const validateEmail = function (email) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        validate: {message: 'Invalid Email', validator: validateEmail}
    },
    password: {type: String, required: true}
});

export default mongoose.model('User', userSchema);
