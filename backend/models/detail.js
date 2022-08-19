import mongoose from "mongoose";
import encrypt from 'mongoose-encryption'
const detailSchema = new mongoose.Schema({
    name : {
        type : 'string',
        required : true
    },
    password : {
        type : 'String',
        required : true
    },
    userID : {
        type : 'String',
        required : true
    },
});

var secret = process.env.SECRET;

detailSchema.plugin(encrypt, { secret : '12345', encryptedFields: ['password']});

const Detail = new mongoose.model('Detail', detailSchema);

export default Detail;