import express from 'express';
import {
    getAllUsers,
    getSingleUser,
    createUser, 
    deleteUser,
    updateUser
} from '../controllers/UserController.js'; 

const UserRouter = express.Router();

UserRouter.get('/', getAllUsers);

UserRouter.get('/:id', getSingleUser)

UserRouter.post('/', createUser);

UserRouter.delete('/:id', deleteUser)

UserRouter.patch('/:id', updateUser)

export default UserRouter;