import mongoose from "mongoose";
import VideoModel from "../models/VideoModel.js";

// TODO: create functions that can be referenced in HTTP requests

// get all
const getAllVideos = async (req, res) => {
    const data = await VideoModel.find( {} );
    res.status(200).json(data);
}

// get single
const getSingleVideo = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid object ID"})
    }
    const data = await VideoModel.findById(id);
    if (!data) {
        return res.status(404).json({error: "Does not exist"});
    }
    res.status(200).json(data);
}

// create new
const createVideo = async (req, res) => {
    const { title, description, url, thumbnail, duration, 
            tags, views, likes, dislikes, comments, playbackPosition, 
            playbackStatus, uploadDate, updatedAt } = req.body;
    try {
        const model = await VideoModel.create({
            title, description, url, thumbnail, duration, 
            tags, views, likes, dislikes, comments, playbackPosition, 
            playbackStatus, uploadDate, updatedAt
        });
        res.status(200).json(model);
    } catch (error) {
        res.status(400).json({ 
            error: error.message
        })
    }
}

// delete
const deleteVideo = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid object ID"})
    }
    const data = await VideoModel.findOneAndDelete({_id: id});
    if (!data) {
        return res.status(404).json({error: "Does not exist"});
    }
    res.status(200).json(data);
}

// update
const updateVideo = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid object ID"})
    }
    const data = await VideoModel.findOneAndUpdate(
        {_id: id}, {...req.body}
    )
    if (!data) {
        return res.status(404).json({error: "Does not exist"});
    }
    res.status(200).json(data);
}

export {
    getAllVideos,
    getSingleVideo,
    createVideo, 
    deleteVideo,
    updateVideo
}