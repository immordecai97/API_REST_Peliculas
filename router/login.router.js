import { authLogin } from "./../controller/usuario.controller.js"
import express from "express"
import "dotenv/config"

const ROUTER = express.Router()
ROUTER.post('/', authLogin);
export default ROUTER