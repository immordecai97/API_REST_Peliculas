import express from 'express';
// import { filtroQueries } from './../middlewares/filtros.middleware.js'
// import FS from 'node:fs/promises';
import {validateToken} from './../middlewares/auth.middleware.js';
import { getPeliculas, getPeliculaById, updatePelicula, createPelicula, deletePelicula } from './../controller/pelicula.controller.js'
const ROUTER = express.Router();
// const FILE = 'movies.json';

ROUTER.get('/',validateToken, getPeliculas);
ROUTER.post('/', createPelicula);
// ROUTER.get('/', filtrarXGenre);//====> por query
ROUTER.get('/:id', getPeliculaById);
ROUTER.patch('/:id', updatePelicula);
ROUTER.delete('/:id', deletePelicula);


// ROUTER.get('/', async (req, res) => {
//     try {
//         const DATA = await FS.readFile(FILE, 'utf-8');
//         const RES = await JSON.parse(DATA);
//         res.status(200).json(RES);
//     } catch (error) {
//         res.status(400).json({
//             data: error.message
//         });
//     }
// });

// ROUTER.get('/:id', async (req, res) => {
//     const { id } = req.params;

//     try {
//         const DATA = await FS.readFile(FILE, 'utf-8');
//         const RES = await JSON.parse(DATA);
//         const PELI = RES.find(movie => movie.id === id);
//         console.log(PELI);
//         res.status(200).json(PELI);
//     } catch (error) {
//         res.status(400).json({
//             data: error.message
//         });
//     }
// });


// // ROUTER.post('/', async (req, res) => {
// //     try {
// //         // await peliculaController.createPelicula(req.body);


// //         // const BODY = req.body;
// //         // const newPeli = {
// //         //     id: CRYPTO.randomUUID(), //id se genera automaticamente
// //         //     ...BODY //aca usamos el spread operation para que traiga el resto del objeto del parametro data
// //         // };
// //         // const DATA = await FS.readFile(FILE, 'utf-8');
// //         // const RES = await JSON.parse(DATA);
// //         // RES.push(newPeli);

// //         // FS.writeFile(FILE, JSON.stringify(RES));

// //         // res.status(201).json({
// //         //     messsage: 'Created'
// //         // });

// //     } catch (error) {
// //         res.status(400).json({
// //             data: error.message
// //         });
// //     }
// // });

// ROUTER.delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const DATA = await FS.readFile(FILE, 'utf-8');
//         const RES = await JSON.parse(DATA);
//         // const NEW_ARRAY = RES.map(peli => {if (peli.id !== id) return peli});
//         const NEW_ARRAY = RES.filter(peli => peli.id !== id);
//         FS.writeFile(FILE, JSON.stringify(NEW_ARRAY));
//         res.status(200).json({
//             message: 'Se borró la pelicula con el id: ' + id,
//         })
//     } catch (error) {
//         res.status(400).json({
//             data: error.message
//         });
//     }
// });

// ROUTER.patch('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const CHANGES = req.body;
//         const DATA = await FS.readFile(FILE, 'utf-8');
//         const RES = await JSON.parse(DATA);
//         const INDICE = RES.findIndex(peli => peli.id === id);
//         if (INDICE === -1) { // ===> validamos el error, findIndex() devuelve -1 cuando no encontró nada
//             throw new Error('Pelicula no encontrada');
//         }
//         const PELICULA = RES[INDICE] // ===> esta es la pelicula objeto
//         RES[INDICE] = {
//             ...PELICULA,
//             ...CHANGES
//         };
//         FS.writeFile(FILE, JSON.stringify(RES));
//         res.status(202).json({
//             data: 'Se ha modificado la pelicula' + RES[INDICE].title
//         });

//     } catch (error) {
//         res.status(400).json({
//             data: error.message
//         });
//     }

// });

export default ROUTER;