import express from "express";
import routerAPI from './router/index.router.js';
import connectToDataBase from "./db.js";

connectToDataBase()

const APP = express();
const PORT = process.env.PORT ?? 3001;

APP.use(express.json());
APP.use(express.urlencoded({extended: true}));

APP.get('/', (req, res) => {
    res.send('HOME'); //aca hay que pasar el index.html
});

routerAPI(APP);

APP.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});