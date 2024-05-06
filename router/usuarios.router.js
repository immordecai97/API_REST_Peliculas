import express from "express"
import { createUser, getUsers, updateUser } from "./../controller/usuario.controller.js";
// import Joi from "joi"

const ROUTER = express.Router();

ROUTER.get("/", getUsers);
ROUTER.post("/", createUser);
ROUTER.put("/:email", updateUser);

export default ROUTER;