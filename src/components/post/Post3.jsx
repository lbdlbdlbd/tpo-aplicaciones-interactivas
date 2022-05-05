import "./post.css"
import chocolateCake from './chocolateCake.jpg'
import { ImStarFull,ImStarHalf,ImStarEmpty } from "react-icons/im";

export default function Post3() {
  return (
    <div className="post">
        <img 
            className="postImg" 
            src={chocolateCake} 
            alt="simple greek salad"/>
        <div className="container">
            <div className="postInfo">
                <span className="postTitle">Torta de chocolate</span>
                <div className="postCats">
                    <span className="postCat">Postre</span>
                    <span className="postCat">Dulce</span>
                </div>
                <hr/>
                    <span className="postDate">11/4/2022</span>
                    <span className="postDificultyStars"><ImStarFull/><ImStarFull/><ImStarFull/><ImStarHalf/><ImStarEmpty/></span>
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
