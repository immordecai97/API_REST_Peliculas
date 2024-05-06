import peliculaModel from "../model/pelicula.model.js";

export const getPeliculas = async (req, res) => {
    try {
        res.header('Access-Control-Allow-Origin', '*');
        const { genero, nombre } = req.query;
        let PELICULAS = [];
        if (genero) {
            PELICULAS = await peliculaModel.find({
                genre: {
                    // $in: [genero],
                    $regex: genero,
                    $options: 'i'
                }
            });
        } else if (nombre) {
            PELICULAS = await peliculaModel.find({
                title: {
                    // $in: nombre,
                    $regex: nombre,
                    $options: 'i'
                }
            });
        } else {
            PELICULAS = await peliculaModel.find();
        }
        res.status(200).json({
            message: 'Mostrando peliculas',
            data: PELICULAS
        });
    } catch (error) {
        res.status(404).json({
            message: error.message = 'No hay peliculas'
        })
    }
};

export const getPeliculaById = async (req, res) => {
    try {
        res.header('Access-Control-Allow-Origin', '*');
        const { id } = req.params;
        const PELICULA = await peliculaModel.findById(id);
        res.status(200).json({
            message: 'Pelicula' + PELICULA.title,
            data: PELICULA
        })
    } catch (error) {
        res.status(404).json({
            message: error.message = 'Pelicula no encontrada'
        })
    }
};

export const updatePelicula = async (req, res) => {
    try {
        const { id } = req.params;
        const BODY = req.body;
        const PELICULA = await peliculaModel.findByIdAndUpdate(id, BODY);
        const PELICULA_ACTUALIZADA = await peliculaModel.findById(id);
        res.status(200).json({
            messsage: PELICULA_ACTUALIZADA.nombre + 'Actualizada!',
            data: PELICULA_ACTUALIZADA
        })
    } catch (error) {
        res.status(404).json({
            message: error.message = 'No se pudo actualizar'
        })

    }
};

export const createPelicula = async (req, res) => {
    try {
        const BODY = req.body;
        const PELICULA = new peliculaModel({
            title: BODY.title,
            year: BODY.year,
            director: BODY.director,
            duration: BODY.duration,
            poster: BODY.poster,
            genre: BODY.genre,
            rate: BODY.rate,
            hidden: BODY.hidden,
        });
        await PELICULA.validate();
        await PELICULA.save();
        res.status(201).json({
            messsage: 'Creado'
        });
    } catch (error) {
        res.status(404).json({
            messsage: 'No se pudo crear'
        });
    }
}

export const deletePelicula = async (req, res) => {
    try {
        const { id } = req.params;
        const PELICULA = await peliculaModel.findByIdAndDelete(id);
        res.status(200).json({
            message: 'Eliminada con exito',
            data: PELICULA
        })
    } catch (error) {
        req.status(404).json({
            message: error.message = 'No se pudo eliminar'
        })
    }
};

/**
 * FILTRAR: peliculas por genero
 */
// application.get('/')
// export const filtrarXGenre = async (req, res) => {
//     try {
//         const { genero } = req.query;
//         if (genero) {
//             res.json({
//                 query: genero
//             })
//         }
//     } catch (error) {

//     }
// };