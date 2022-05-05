import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faWhatsapp, faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";




function Footer() {
  return (
    <div className= "footer">
        <div className="fLists">
            <ul className="fList">
                <h3 className="fTitle">Categorías</h3>
                <li className="fListItem">Inicio</li>
                <li className="fListItem">Buscar Recetas</li>
                <li className="fListItem">Agregar Receta</li>
                <li className="fListItem">Sobre Nosotros</li>
                <li className="fListItem">Contacto</li>
            </ul>
            <ul className="fList">
                <div className="containerCont">
                    <h3 className="fTitle">Contactános</h3>
                    <li className="fListItem-sm"><FontAwesomeIcon icon={faWhatsapp} size="2x" className="fSocial" />+54-9-111111</li>
                    <li className="fListItem-sm"><FontAwesomeIcon icon={faEnvelope} size="2x" className="fSocial"/>hola@mirecetario.com</li>
                </div>
            </ul>
            <ul className="fList">
                <h3 className="fTitle">Redes Sociales</h3>
                <div className="socialContainer">
                    <li className="fListItem-sm"><FontAwesomeIcon icon={faYoutube}size="2x" className="fSocial"/></li>
                    <li className="fListItem-sm"><FontAwesomeIcon icon={faFacebook} size="2x" className="fSocial"/></li>
                    <li className="fListItem-sm"><FontAwesomeIcon icon={faInstagram} size="2x" className="fSocial"/></li>
                    <li className="fListItem-sm"><FontAwesomeIcon icon={faTwitter} size="2x" className="fSocial"/></li>
                </div>
                
            </ul>
        </div>
        <div className="fText">Copyright © Mi Recetario Argentina | Blog de Recetas - {new Date().getFullYear()}. Todos los derechos reservados.</div>
    </div>
  )
}

export default Footer