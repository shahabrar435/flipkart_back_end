import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        trim: true,
        min: 2,
        max: 20
    },
    lastname: {
        type: String,
        require: true,
        trim: true,
        min: 2,
        max: 20
    },
    username: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        index: true,
        loewrcase: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        loewrcase: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String
    }
});

const user = mongoose.model('user', userSchema);

export default user;