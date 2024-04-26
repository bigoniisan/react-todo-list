import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';

const PermissionModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true} );

export default mongoose.model('Permission', PermissionModel);