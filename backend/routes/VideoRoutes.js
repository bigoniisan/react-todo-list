import express from 'express';
import {
    getAllVideos,
    getSingleVideo,
    createVideo, 
    deleteVideo,
    updateVideo
} from '../controllers/VideoController.js'; 

const VideoRouter = express.Router();

VideoRouter.get('/', getAllVideos);

VideoRouter.get('/:id', getSingleVideo)

VideoRouter.post('/', createVideo);

VideoRouter.delete('/:id', deleteVideo)

VideoRouter.patch('/:id', updateVideo)

export default VideoRouter;