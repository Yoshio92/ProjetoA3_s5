const { v4: uuidv4 } = require("uuid");

class UserDTO {
    constructor({ user_id, user_email, user_password, user_type}, criar = false) {
        if (criar) {
            this.user_id = uuidv4();
        } else {
            this.user_id = user_id;
        }

        this.user_email = user_email;
        this.user_password = user_password;
        this.user_type = user_type;
    }

    setEmail(user_email) {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(user_email)) throw new Error("Invalid email format");
        this.user_email = user_email;
    }

    setPassword(password) {
        const conterCarEsp = /[!@#$%^&*]/;
        if (password.length < 8){
            throw new Error("A senha deve ter ao menos 8 caracteres");
        }           
        if (!/[A-Z]/.test(password)){
            throw new Error("A senha deve conter ao menos um caractere maiúsculo")
        }
        if(!conterCarEsp.test(password)){
            throw new Error("A senha deve conter ao menos um caractere especial(!@#$%^&*)")
        }
    }
}
module.exports = UserDTO;
