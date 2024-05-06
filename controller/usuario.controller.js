import usuarioModel from "./../model/usuario.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


export async function getUsers(req, res) {
    try {
        const USERS = await usuarioModel.find();
        // let usuarios = await Usuario.find({estado: true});

        res.status(201).json({
            message: 'Mostrando lsita de usuarios',
            data: USERS
        })

    } catch (error) {
        res.status(404).json({
            message: error.message = 'No se encontraron los usuarios'
        })
    }
}

export async function createUser(req, res) {

    try {
        const BODY =  req.body;
        const USER =  new usuarioModel({
            nombre: BODY.nombre,
            password: bcrypt.hashSync(BODY.password, 10),
            email: BODY.email,
            estado: BODY.estado,
            imagen: BODY.imagen
        })
        await USER.save();
        res.status(201).json({
            message: 'El usuario ' + USER.nombre + ' se ha creado con exito!',
            data: USER
        })
    } catch (error) {
        res.status(404).json({
            message: 'No se pudo crear',
            data: error.message
        })
    }
}

export async function updateUser(req, res) {
    try {
        const { email } = req.params
        const BODY = req.body;
        const USER = await usuarioModel.updateOne(
            { "email": email },
            {
                $set: {
                    email: BODY.email,
                    nombre: BODY.nombre,
                    password: BODY.password
                }
            });
        res.status(200).json({
            message: 'El usuario se ha modificado',
            data: USER
        })

    } catch (error) {
        res.status(404).json({
            message: 'No se pudo modificar',
            data: error
        })
    }
}

export async function authLogin(req, res) {
    // console.log(req.body.password)
    usuarioModel.findOne({ email: req.body.email })
    .then(data => {
        // console.log(data.password)
        if (data) {
                const pass = req.body.password.toString()
                const passwordValido = bcrypt.compareSync(pass , data.password)
                if (!passwordValido) return res.status(400).json({ msj: "password incorrecto" })
                const jwToken = jwt.sign({ //este es el payload
                    usuario: {
                        _id: data._id,
                        nombre: data.nombre,
                        email: data.email
                    }
                }, process.env.KEY_SECRET, { expiresIn: process.env.EXPIRACION })
                res.json({
                    message: 'Todo ok',
                    usuario: {
                        _id: data._id,
                        nombre: data.nombre,
                        email: data.email
                    }, jwToken
                })
            } else {
                res.status(400).json({ msj: "email incorrecto" })
            }
        })
};