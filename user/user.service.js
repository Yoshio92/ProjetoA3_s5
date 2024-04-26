const { v4: uuidv4 } = require("uuid");
const User = require("./user.entity.js");
const UserDTO = require("./user.dto.js");
const { GenericException } = require("../generic-exception.js");

const users = [
  {
    user_id: uuidv4(),
    user_email: "admin@admin.com",
    user_password: "123456",
    user_type: "admin",
  },
  {
    user_id: uuidv4(),
    user_email: "teste@2teste.com",
    user_password: "123456",
    user_type: "cliente",
  },
];

class UserService {

  login(user_email, user_password) {
    const usuario = users.find((user) => user.user_email === user_email);
    if (usuario <= -1) return false;
    if(usuario.user_password=== user_password){
      return true;
    } else {
      return false;
    }
  }

  loginAdmin(user_email, user_password) {
    if (!user_email === "admin@admin.com" && user_password === "123456") return false;
    if(usuario.user_password=== user_password){
      return true;
    } else {
      return false;
    }
  }

}