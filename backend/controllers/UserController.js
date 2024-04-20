import mongoose from "mongoose";
import UserModel from "../models/UserModel.js";

// TODO: create functions that can be referenced in HTTP requests

// get all
const getAllUsers = async (req, res) => {
    const data = await UserModel.find( {} );
    res.status(200).json(data);
}

// get single
const getSingleUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid object ID"})
    }
    const data = await UserModel.findById(id);
    if (!data) {
        return res.status(404).json({error: "Does not exist"});
    }
    res.status(200).json(data);
}

// create new
const createUser = async (req, res) => {
    const { username, password, email, dateOfBirth, profilePicture, 
            location, createdAt, updatedAt, socialMedia, 
            settings } = req.body;
    try {
        const model = await UserModel.create({
            username, password, email, dateOfBirth, profilePicture, 
            location, createdAt, updatedAt, socialMedia, 
            settings
        });
        res.status(200).json(model);
    } catch (error) {
        res.status(400).json({ 
            error: error.message
        })
    }
}

// delete
const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid object ID"})
    }
    const data = await UserModel.findOneAndDelete({_id: id});
    if (!data) {
        return res.status(404).json({error: "Does not exist"});
    }
    res.status(200).json(data);
}

// update
const updateUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid object ID"})
    }
    const data = await UserModel.findOneAndUpdate(
        {_id: id}, {...req.body}
    )
    if (!data) {
        return res.status(404).json({error: "Does not exist"});
    }
    res.status(200).json(data);
}

export {
    getAllUsers,
    getSingleUser,
    createUser, 
    deleteUser,
    updateUser
}