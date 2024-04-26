import express from 'express';
import {
    getAllUsers,
    getSingleUser,
    getUserProfile,
    createUser, 
    logInUser,
    deleteUser,
    updateUser
} from '../controllers/UserController.js'; 

const UserRouter = express.Router();

UserRouter.get('/', getAllUsers);

UserRouter.get('/:id', getSingleUser);

UserRouter.get('/profile', getUserProfile);

UserRouter.post('/signup', createUser);

UserRouter.post('/login', logInUser);

UserRouter.delete('/:id', deleteUser)

UserRouter.patch('/:id', updateUser)

export default UserRouter;