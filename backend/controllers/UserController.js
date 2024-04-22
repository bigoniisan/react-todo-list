import mongoose from "mongoose";
import encryptpwd from 'encrypt-with-password';
import UserModel from "../models/UserModel.js";

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
    
    // Error fetching random country: TypeError: fetch failed
    // ConnectTimeoutError: Connect Timeout Error
    function randomCountry() {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                const randomCountryIndex = Math.floor(Math.random() * 250);
                return data[randomCountryIndex].name.common;
            })
            .catch(error => {
                console.log("Error fetching random country:", error);
                return "";
            });
    }

    function randomEncryptedPassword(text, encryptionKey="boogers") {
        return encryptpwd.encrypt(text, encryptionKey);
    }

    function getVideosFromDb(quantity) {
        const fetchAllVideoData = async () => {
            let videos = []; 
            const response = await fetch("http://localhost:5000/api/video", {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                for (let i = 0; i < quantity; i++) {
                    videos.push(data[Math.floor(Math.random() * data.length)]._id);
                }
                console.log("Successfully retrieved user video data");
            } else {
                console.log("Could not retrieve user video data");
            }
            return videos;
        }
        return fetchAllVideoData();
    }

    const username = randomString(8);
    const password = randomEncryptedPassword(randomString(5));
    const email = randomString() + "@gmail.com";
    const dateOfBirth = randomDate(new Date(1950, 0, 1), new Date(2020, 12, 31));
    const profilePicture = randomThumbnail();
    let videos = [];
    const channelName = "@" + randomString(11);
    const userUrl = "https://http://localhost:3000/user/" + randomString();
    const location = randomString(11);
    const createdAt = randomDate();
    const updatedAt = randomDate();
    const socialMedia = {
        facebook: "https://www.facebook.com/" + randomString(),
        twitter: "https://twitter.com/" + randomString(),
        linkedin: "https://www.linkedin.com/in/" + randomString()
    };
    const settings = {
        notifications: Math.random() < 0.5
    }

    const { 
        tags, comments, playbackPosition, playbackStatus, 
    } = req.body;
    
    try {
        videos = getVideosFromDb(10)
            .then(data => videos = data)
            .then(async () => {
                const model = await UserModel.create({
                    username: username, 
                    password: password, 
                    email: email,
                    dateOfBirth: dateOfBirth,
                    profilePicture: profilePicture,
                    videos: videos,
                    channelName: channelName,
                    userUrl: userUrl,
                    location: location,
                    createdAt: createdAt,
                    updatedAt: updatedAt,
                    socialMedia: socialMedia,
                    settings: settings
                });
                res.status(200).json(model);
            });
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