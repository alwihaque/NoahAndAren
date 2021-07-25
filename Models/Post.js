import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, required: true, minlength: 5},
    content: {type: String, required: true, minlength: 10},
    image: {
        data: Buffer,
        contentType: String
    },
    postBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tag: {
        type: String,
        enum: ['Noah', 'Aren',''],
        default: ''
    }
});

export default mongoose.model('Post', postSchema);