import express from 'express';
import {
    getAllVideos,
    getSingleVideo,
    createVideo, 
    deleteVideo,
    updateVideo
} from '../controllers/VideoController.js'; 

const router = express.Router();

router.get('/video', getAllVideos);

router.get('/video/:id', getSingleVideo)

router.post('/video', createVideo);

router.delete('/video/:id', deleteVideo)

router.patch('/video/:id', updateVideo)

export default router;