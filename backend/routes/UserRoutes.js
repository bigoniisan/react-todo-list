import express from 'express';
import {
    getAllUsers,
    getSingleUser,
    getUserByEmail,
    createUser, 
    deleteUser,
    updateUser
} from '../controllers/UserController.js'; 

const UserRouter = express.Router();

UserRouter.get('/', getAllUsers);

UserRouter.get('/:id', getSingleUser)

UserRouter.get('/email/:email', getUserByEmail)

UserRouter.post('/', createUser);

UserRouter.delete('/:id', deleteUser)

UserRouter.patch('/:id', updateUser)

export default UserRouter;