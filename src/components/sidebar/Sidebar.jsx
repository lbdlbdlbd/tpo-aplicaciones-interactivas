import "./sidebar.css"
import sidebarimg2 from './sidebarimg2.jpg'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT US</span>
            <img className="sidebarImg1" src={sidebarimg2} alt=""></img>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Impedit expedita reiciendis voluptatum atque repellat consequatur obcaecati numquam sunt iusto. 
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIAS</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">DESAYUNO</li>
                <li className="sidebarListItem">ALMUERZO</li>
                <li className="sidebarListItem">MERIENDA</li>
                <li className="sidebarListItem">CENA</li>
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">SEGUINOS</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                <i className="sidebarIcon fa-brands fa-youtube-square"></i>
            </div>
        </div>
    </div>

    
    
  )
}
