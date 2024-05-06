import "dotenv/config";
import jwt from "jsonwebtoken";

// async function autenticacion(){
//     //consultar a BD y validar que existen tanto
//     //username como password
//     const {user, pass} = req.body;
//     const USER = {username: user}; //info necesaria para comparar el toke del usuario para desencriptarlo
//     const accesToken = generateAccessToken(USER);
//     resizeBy.header('auth', accesToken.json({
//         message: 'Usuario autenticado',
//         token: req.get('auth')
//     }))
// }
// function generateAccessToken(user){
//     return jwt.sign(user, process.env.KEY_SECRET, {expiresIn: '10m'}) //payload es la infrommacion que vamos a encriptar, la clave secreta es para poder desencriptar la infromacion
// }
//middleware
export function validateToken(req, res, next){
    const TOKEN = req.get('auth');
    if(!TOKEN) res.send('Acceso denegado');
    jwt.verify(TOKEN, process.env.KEY_SECRET, (err, decode) => {
        if(err) res.send('Acceso denegado, token expirado o incorrecto');
        req.usuario = decode.usuario
        next();
    });
}
// export function validateToken(req, res, next){
//     const accessToken = req.headers['auth'] || req.query.token;
//     if(!accessToken) res.send('Acceso denegado');
//     jwt.verify(accessToken, process.env.KEY_SECRET, (err, user) => {
//         if(err){
//             res.send('Acceso denegado, token expirado o incorrecto');
//         }else{
//             next();
//         }
//     });
// }