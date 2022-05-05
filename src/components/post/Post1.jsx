import "./post.css"
import greekSalad from './greekSalad.jpg'
import { ImStarFull,ImStarEmpty } from "react-icons/im";

export default function Post1() {
  return (
    <div className="post">
        <img 
            className="postImg" 
            src={greekSalad} 
            alt="simple greek salad"/>
        <div className="container">
            <div className="postInfo">
                <span className="postTitle">Ensalada griega</span>
                <div className="postCats">
                    <span className="postCat">Ensalada</span>
                    <span className="postCat">Vegetariano</span>
                </div>
                <hr/>
                    <span className="postDate">1/5/2022</span>
                    <span className="postDificultyStars"><ImStarFull/><ImStarFull/><ImStarEmpty/><ImStarEmpty/><ImStarEmpty/></span>
            </div>

            <p className="postDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Dolorum deserunt fugiat quaerat minima facilis adipisci quod, dignissimos labore, 
                mollitia vero, culpa eos tempora ipsa ab quis! 
                Praesentium quo et maxime?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Dolorum deserunt fugiat quaerat minima facilis adipisci quod, dignissimos labore, 
                mollitia vero, culpa eos tempora ipsa ab quis! 
                Praesentium quo et maxime?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Dolorum deserunt fugiat quaerat minima facilis adipisci quod, dignissimos labore, 
                mollitia vero, culpa eos tempora ipsa ab quis! 
                Praesentium quo et maxime?
            </p>

            <h3 className="continueReading">Continuar leyendo</h3>

            <ul className="postIngr">
                <li>tomates</li>
                <li>pepinos</li>
                <li>cebolla morada</li>
                <li>pimiento (rojo o verde)</li>
                <li>aceitunas Kalamata</li>
                <li>queso feta</li>
                <li>orégano fresco o seco</li>
                <li>aceite de oliva virgen extra</li>
                <li>vinagre de vino blanco</li>
                <li>sal</li>
                <li>pimienta recién molida</li>
            </ul>
        </div>
        
    </div>
        
  )
}
