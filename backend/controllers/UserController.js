import mongoose from "mongoose";
import UserModel from "../models/UserModel";

// TODO: create functions that can be referenced in HTTP requests

// get all
const getAllUsers = async (req, res) => {
    const data = await testModel.find( {} ).sort( {createdAt: -1} );
    res.status(200).json(data);
}

// get single
const getSingleUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid object ID"})
    }
    const data = await testModel.findById(id);
    if (!data) {
        return res.status(404).json({error: "Does not exist"});
    }
    res.status(200).json(data);
}

// create new
const createUser = async (req, res) => {
    const { username, password, email, age, 
        dateCreated, dateUpdated, isMember, 
        _someId, asset } = req.body;
    try {
        const model = await testModel.create({
            username, password, email, age, 
        dateCreated, dateUpdated, isMember, 
        _someId, asset
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
    const data = await testModel.findOneAndDelete({_id: id});
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
    const data = await testModel.findOneAndUpdate(
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