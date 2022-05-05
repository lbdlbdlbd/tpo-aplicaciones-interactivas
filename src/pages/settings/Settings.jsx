import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import avatar from "./avatar.jpg"
import { motion } from "framer-motion"

export default function Settings() {
  return (
    <motion.div 
        className="settings"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit= {{opacity: 0}}
    >
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Actualizar cuenta</span>
                <span className="settingsDeleteTitle">Borrar cuenta</span>
            </div>
            <form className="settingsForm">
                <label>Foto de perfil</label>
                <div className="settingsPP">
                    <img src={avatar} alt=""></img>
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}></input>
                </div>
                <label>Nombre de usuario</label>
                <input type="text" placeholder="Harry"></input>
                <label>Email</label>
                <input type="email" placeholder="harrystyles@gmail.com"></input>
                <label>Contraseña</label>
                <input type="text" placeholder="•••••••"></input>
                <button className="settingsSubmit">Actualizar</button>
            </form>
        </div>
        <Sidebar></Sidebar>
    </motion.div>
  )
}