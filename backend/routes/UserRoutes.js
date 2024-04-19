import express from 'express';
import {
    getAllUsers,
    getSingleUser,
    createUser, 
    deleteUser,
    updateUser
} from '../controllers/UserController.js'; 

const router = express.Router();

router.get('/user', getAllUsers);

router.get('/user/:id', getSingleUser)

router.post('/user', createUser);

router.delete('/user/:id', deleteUser)

router.patch('/user/:id', updateUser)

export default router;