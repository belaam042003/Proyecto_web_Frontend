import express, {Application, Request, Response} from 'express';
import routesPublicacion from '../routes/publicacion';
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT|| '3001';
        this.listen();
        this.middleware();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`) 
        })
    }

    routes(){
        this.app.get('/', (req: Request, res: Response) =>{
            res.json({
                msg: 'API working'
            })
        })
        this.app.use('/api/publicaciones', routesPublicacion)
    }

    middleware(){
        //parseo del body
        this.app.use(express.json())
    }

    async dbConnect(){
        try {
            await db.authenticate();
            console.log('Conexion establecida con la base de datos')
        } catch (error) {
            console.log(error);
            console.log("No se pudo establecer la conexion con la base de datos")
        }
    }
}

export default Server;