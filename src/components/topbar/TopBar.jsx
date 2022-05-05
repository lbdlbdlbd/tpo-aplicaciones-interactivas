import "./topbar.css";
import logo from "./logo.jpg";
import avatar from './avatar.jpg';
import { Link } from "react-router-dom";

export default function TopBar() {
    const user = false;
  return (
    <div className="top">
        <div className="topLeft"> 
            <img className="logo" src={logo} alt="logoMiRecetario" />
        </div>
        <div className="topCenter">
            <ul className="topList"> 
                <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="topListItem"><Link className="link" to="/write">AÑADIR RECETA</Link></li>
                <li className="topListItem">BUSCAR</li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <img 
                        className="topImg" 
                        src={avatar} alt="">   
                    </img>        
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                INGRESAR
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTRARSE
                            </Link>
                        </li>
                    </ul>
                    
                )
            }
            
            {/*<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>*/}
        </div>
    </div>
  )
}