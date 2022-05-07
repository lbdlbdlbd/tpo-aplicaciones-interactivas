import "./headerSec.css";
import Searchbar from "./Searchbar";

function HeaderSec() {
  return (
    <div className="headerSec">
      <h1 className="headerTitle">Recetas</h1>
      <p className="headerDesc">
      Organizamos nuestras recetas de todas las formas que se nos ocurrio para facilitarte el trabajo. 
      Restricciones de dieta, cenas románticas, preparación de comidas, algunas de nuestras recetas mas aclamadas. 
      No importa como busques,estamos seguro que vas a encontrar lo que necesites.</p>
      <Searchbar/>
    </div>
  )
}

export default HeaderSec