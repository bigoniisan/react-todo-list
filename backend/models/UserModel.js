import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

// TODO: get UserModel working

const UserModel = new mongoose.Schema({
    /**
     * // TODO: Password encryption
     * For user authentication to work, 
     * we'll need to create some helper methods on our users to set 
     * and validate passwords, as well as generate JWT's. 
     * To generate and validate hashes, we'll use the pbkdf2 algorithm 
     * from the crypto library that comes with Node.
     */
    username: {
        type: String,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        // unique: true,
        index: true
    },
    password: { type: String, required: true },
    email: {
        type: String,
        required: [true, "can't be blank"], 
        match: [/^[a-zA-Z0-9@.]+$/, 'is invalid'],
        // unique: true,
        index: true
    },
    dateOfBirth: { type: Number },
    profilePicture: { type: String },
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

export default mongoose.model('UserModel', UserModel);