import { Router } from 'express';
import { deletePublicacion, getPublicacion, getPublicaciones, postPublicacion, updatePublicacion } from '../controllers/publicacion';

const router = Router();

router.get('/', getPublicaciones)
router.get('/:id', getPublicacion)
router.delete('/:id', deletePublicacion)
router.post('/', postPublicacion)
router.put('/:id', updatePublicacion)

export default router;