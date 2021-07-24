import mongoose from "mongoose";

export default (mongoURI) => {
    mongoose.connect(mongoURI, () => {
        console.log('Connected to DB');
    })
}