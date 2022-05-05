import { Link } from "react-router-dom"
import "./register.css"
import { motion } from "framer-motion"

export default function Register() {
  return (
    <motion.div 
      className="register"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit= {{opacity: 0}}
    >
        <span className="registerTitle">Registrarse</span>
        <form className="registerForm">
            <label>Nombre de usuario</label>
            <input type="text" className="registerInput" placeholder="Nombre"></input>
            <label>Email</label>
            <input type="text" placeholder="user@gmail.com" className="registerInput"/>
            <label>Contraseña</label>
            <input type="text" placeholder="••••••" className="registerInput"/>
            <button className="registerButton">Registrarse</button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">Ingresar</Link>
        </button>
    </motion.div>
  )
};
