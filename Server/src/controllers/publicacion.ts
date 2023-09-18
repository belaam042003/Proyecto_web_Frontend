import { Request, Response } from 'express';
import Publicacion from '../models/publicacion';

export const getPublicaciones = async (req: Request, res: Response) => {
    const listPublicaciones = await Publicacion.findAll()

    res.json(listPublicaciones)
}

export const getPublicacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const publicacion = await Publicacion.findByPk(id)

    if (publicacion) {
        res.json(publicacion)
    } else {
        res.status(404).json({
            msg: `no se encontro la publicacion ${id}`
        })
    }
}

export const deletePublicacion = async (req: Request, res: Response) => {
    const { id } = req.params;
    const publicacion = await Publicacion.findByPk(id)

    if (!publicacion) {
        res.status(404).json({
            msg: `no se encontro la publicacion ${id}`
        })
    } else {
        await publicacion.destroy();
        res.json({
            msg: 'La publicacion fue eliminada con exito'
        })
    }
}

export const postPublicacion = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Publicacion.create(body);

        res.json({
            msg: 'Publicacion publicada correctamente'
        })
    } catch (error) {
        console.log(error);
        res.json({ 
            msg: 'Uy parece que algo esta mal, revise si le funciona el cerebro porque el programa funciona aleta'
        })
    }

}

export const updatePublicacion = async(req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const publicacion = await Publicacion.findByPk(id)
        if(publicacion){
            await publicacion.update(body);
            res.json({ msg: 'Publicacion actualizada correctamente' })
        }else{
            res.status(400).json({ 
                msg: `no se encontro la publicacion ${id}`
            })
        }
    } catch (error) {
        console.log(error);
        res.json({ 
            msg: 'Uy parece que algo esta mal, revise si le funciona el cerebro porque el programa funciona aleta'
        })
    }


}