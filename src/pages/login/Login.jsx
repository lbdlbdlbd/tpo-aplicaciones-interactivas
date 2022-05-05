import { Link } from "react-router-dom"
import "./login.css"
import { motion } from "framer-motion"

export default function Login() {
  return (
    <motion.div 
      className="login"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit= {{opacity: 0}}
    >
        <span className="loginTitle">Ingresar</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" placeholder="user@gmail.com" className="loginInput"/>
            <label>Contraseña</label>
            <input type="text" placeholder="••••••" className="loginInput"/>
            <button className="loginButton">Ingresar</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Registrarse</Link>
        </button>
    </motion.div>
  )
}
