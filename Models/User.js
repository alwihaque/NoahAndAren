import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // things that the user will have
    //email
    //firstname
    //password
    //posts they made
    //tags that they follow
    //relationship
    //

    email: {
        type: String, required: true, validate: {
            validator: function (email) {
                return /@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/.test(email);
            }, message: 'Invalid email'
        },
        password: {
            type: String,
            required: true,
            minLength: 5
        },
        firstName: {
            type: String,
            required: true,
            minLength: 5
        },
        lastName: {
            type: String,
            required: true
        },
        posts: [{
            type: mongoose.Types.ObjectId,
            ref: 'Post',
            required: true
        }],
        tags: {
            type: String,
            enum: ['Noah', 'Aren', 'Noah & Aren'],
            default: 'Noah & Aren'
        },
        relationship: {
            type: String,
            enum: ['Father', 'Mother', 'Uncle','Aunt', 'Cousin'],
            required: true
        }

    },
    password: {type: String, required: true}

})

export default mongoose.model('User',userSchema);
