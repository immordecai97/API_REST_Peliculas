//Aqui en el index vamos a exportar el router
//y se va a encargar de definir los responsables y la rutas existentes
import {Router} from 'express';
import peliculasRouter from './peliculas.router.js';
import usuarioRouter from './usuarios.router.js';
import loginRouter from './login.router.js';

function routerAPI(app){
    const ROUTER = Router();
    app.use('/api/v1', ROUTER);
    ROUTER.use('/peliculas', peliculasRouter);
    ROUTER.use('/usuarios', usuarioRouter);
    ROUTER.use('/login', loginRouter);
};

export default routerAPI;