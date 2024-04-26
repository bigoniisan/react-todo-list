import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';

const RoleModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    permissions: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Permission'
    }]
}, { timestamps: true} );

export default mongoose.model('Role', RoleModel);