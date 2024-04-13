import express from 'express';
import { 
    getAll, 
    getSingle, 
    createItem, 
    deleteItem,
    updateItem
} from '../controllers/testController.js'; 

const router = express.Router();

router.get('/', getAll);

router.get('/:id', getSingle)

router.post('/', createItem);

router.delete('/:id', deleteItem)

router.patch('/:id', updateItem)

export default router;