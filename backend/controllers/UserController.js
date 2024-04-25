import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import UserModel from "../models/UserModel.js";

/**
    req.body:
        app.get('/giraffe', (req, res) => {
            console.log(req.body.key1) //value1
            console.log(req.body.key2) //value2
        })

    req.params:
        app.get('/giraffe/:number', (req, res) => {
            console.log(req.params.number)
        })
        GET http://localhost:3000/giraffe/1
    
    req.query:
        GET http://localhost:3000/animals?page=10
        app.get('/animals', () => {
            console.log(req.query.page) // 10
        })
 */

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

const logInUser = async (req, res) => {
    const { email, password, rememberMe } = req.body;
    try {
        // Find the user by username
        const user = await UserModel.findOne({ email: email });
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        // Compare passwords
        if (password !== user.password) {
          return res.status(401).json({ message: 'Incorrect password' });
        }
    
        // Passwords match, return user data
        res.status(200).json({ user });

      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

function randomThumbnail() {
    const randomId = Math.floor(Math.random() * 1000);
    return "https://picsum.photos/id/" + randomId + "/200/125";
}

function getRandomVideosFromDb(quantity) {
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

// create new
const createUser = async (req, res) => {

    // TODO: Hash password 

    let { email, password, rememberMe } = req.body;

    const profilePicture = randomThumbnail();
    const createdAt = Date.now();
    const updatedAt = Date.now();

    try {
        // Check if user exists
        const userExists = await UserModel.findOne({ email: email });
        if (userExists) {
            return res.status(409).json({ message: 'Email already exists' });
        }

        // Generate random videos for user
        const videos = await getRandomVideosFromDb(10);
        // Create user in DB
        const model = await UserModel.create({ 
            password: password, 
            email: email,
            // dateOfBirth: dateOfBirth,
            profilePicture: profilePicture,
            videos: videos,
            // channelName: channelName,
            // userUrl: userUrl,
            // location: location,
            createdAt: createdAt,
            updatedAt: updatedAt,
            // socialMedia: socialMedia,
            // settings: settings
        });
        res.status(201).json(model);
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
    logInUser,
    deleteUser,
    updateUser
}