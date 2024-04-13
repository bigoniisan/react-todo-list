import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const testSchema = new Schema({
    username: {
        type: String,
        required: true  
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 5,
        max: 60
    },
    isMember: {
        type: Boolean
    },
    asset: {
        type: { 
            type: String 
        },
        xdd: { 
            type: String,
            default: "xdd"
        }
    }

}, { timestamps: true })

export default mongoose.model('testModel', testSchema);