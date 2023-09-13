import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Publicacion = db.define('Publicacione',{
    nombre:{
        type: DataTypes.STRING
    },
    Publicaciones:{
        type: DataTypes.TEXT
    }
}, { 
    createdAt: false,
    updatedAt: false
});

export default Publicacion;