import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserModel = new mongoose.Schema({
    email: {
        type: String,
        required: true, 
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'is invalid'],
        unique: true,
        index: true
    },
    password: { type: String, required: true },
    roles: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    }],
    dateOfBirth: { type: Number },
    profilePicture: { type: String },
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
    channelName: { type: String },
    userUrl: { type: String, unique: true },
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    socialMedia: {
        facebook: { type: String },
        twitter: { type: String },
        linkedin: { type: String },
        // Add more social media fields as needed
    },
    settings: {
        notifications: { type: Boolean, default: true },
        // Add more settings fields as needed
      }

}, { timestamps: true })

UserModel.plugin(uniqueValidator);

export default mongoose.model('User', UserModel);