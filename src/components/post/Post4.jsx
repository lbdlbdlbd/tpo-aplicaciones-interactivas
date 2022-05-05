import "./post.css"
import spicyTofuBurger from './spicyTofuBurger.jpg'
import { ImStarFull,ImStarEmpty } from "react-icons/im";

export default function Post4() {
  return (
    <div className="post">
        <img 
            className="postImg" 
            src={spicyTofuBurger} 
            alt="simple greek salad"/>
        <div className="container">
            <div className="postInfo">
                <span className="postTitle">Hamburguesa picante de tofu</span>
                <div className="postCats">
                    <span className="postCat">Almuerzo</span>
                    <span className="postCat">Vegetariano</span>
                </div>
                <hr/>
                    <span className="postDate">3/4/2022</span>
                    <span className="postDificultyStars"><ImStarFull/><ImStarFull/><ImStarFull/><ImStarEmpty/><ImStarEmpty/></span>
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
                <li>pasta de tomate</li>
                <li>tofu</li>
                <li>sriracha</li>
                <li>menta</li>
                <li>albahaca</li>
                <li>cilantro</li>
                <li>harina</li>
                <li>sal</li>
                <li>chalote</li>
            </ul>
        </div>
        
    </div>
        
  )
}
