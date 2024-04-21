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

    // max length 11?
    function randomString(length=11) {
        return Math.random().toString(36).substring(2, length);
    }

    function randomThumbnail() {
        const randomId = Math.floor(Math.random() * 1000);
        return "https://picsum.photos/id/" + randomId + "/200/125";
    }

    function randomNumber(length=10000) {
        return Math.floor(Math.random() * length);
    }

    function randomDate(start = new Date(2001, 0, 1), end = new Date()) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    }

    const title = randomString(8);
    const description = randomString(11);
    const videoUrl = "https://http://localhost:3000/video/" + randomString();
    // preload random thumbnail with lorem picsum
    const thumbnail = randomThumbnail();
    const duration = randomNumber();
    const views = randomNumber();
    const likes = randomNumber();
    const dislikes = randomNumber();
    const uploadDate = randomDate();

    const { 
        tags, comments, playbackPosition, playbackStatus, updatedAt 
    } = req.body;
    
    try {
        const model = await VideoModel.create({
            title: title, 
            description: description, 
            url: videoUrl, 
            thumbnail: thumbnail, 
            duration: duration, 
            tags, 
            views: views, 
            likes: likes, 
            dislikes: dislikes, 
            comments, 
            playbackPosition, 
            playbackStatus, 
            uploadDate: uploadDate, 
            updatedAt
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