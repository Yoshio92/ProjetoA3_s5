// app.js
const express = require("express");
const bodyParser = require("body-parser");
const UserController = require("./user/user.controller.js");
const PerfilController = require("./perfil/perfil.controller.js");

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Para parsing de application/json

const userController = new UserController();
const perfilController = new PerfilController();

// Rotas para o CRUD de Usuário
app.post("/users", (req, res) => userController.createUser(req, res));
app.get("/users", (req, res) => userController.getAllUsers(req, res));
app.get("/users/:id", (req, res) => userController.getUserById(req, res));
app.put("/users/:id", (req, res) => userController.updateUser(req, res));
app.delete("/users/:id", (req, res) => userController.deleteUser(req, res));
app.post("/users/login", (req, res) => userController.login(req, res));
app.post("/users/loginAdmin", (req, res) => userController.loginAdmin(req, res));


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
