import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // things that the user will have
    email: {
        type: String, required: true, validate: {
            validator: function (email) {
                return /@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/.test(email);
            }, message: 'Invalid email'
        }
    },
    password: {type: String, required: true}

})
