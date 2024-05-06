// export const filtroQueries = async (err, req, res, next) => {
//         const { genero, limit, offsets } = req.query;
//         if (genero || limit || offsets) {
//             res.status(200).json({
//                 query: genero || limit || offsets
//             });
          
//             next('holaaaa');
//             // next(genero || limit || offsets);
//         }
// };