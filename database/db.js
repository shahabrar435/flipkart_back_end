//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL =`mongodb://${username}:${password}@ecommerceweb-shard-00-00.u8qy2.mongodb.net:27017,ecommerceweb-shard-00-01.u8qy2.mongodb.net:27017,ecommerceweb-shard-00-02.u8qy2.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-m9tdzc-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;