import "./write.css"
import flan from "./flan.png"
import { motion } from "framer-motion"

export default function Write() {
  return (
    <motion.div 
        className="write"
        initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit= {{opacity: 0}}
    >
        <img className ="writeImg" src={flan} alt=""></img>
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
                <input type="text" placeholder="Nombre de la Receta" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea 
                    placeholder="Escriba aquí la receta" 
                    type="text" 
                    className="writeInput writeText"
                ></textarea>
            </div>
            <button className="writeSubmit">Publicar Receta</button>
        </form>
    </motion.div>
  )
}
