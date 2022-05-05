import "./post.css"
import tomatoSoup from './tomatoSoup.jpg'
import { ImStarFull,ImStarHalf,ImStarEmpty } from "react-icons/im";

export default function Post2() {
  return (
    <div className="post">
        <img 
            className="postImg" 
            src={tomatoSoup} 
            alt="simple greek salad"/>
        <div className="container">
            <div className="postInfo">
                <span className="postTitle">Sopa de tomate</span>
                <div className="postCats">
                    <span className="postCat">Sopa</span>
                    <span className="postCat">Vegano</span>
                </div>
                <hr/>
                    <span className="postDate">22/4/2022</span>
                    <span className="postDificulty"><ImStarFull/><ImStarHalf/><ImStarEmpty/><ImStarEmpty/><ImStarEmpty/></span>
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
                <li>Caldo de vegetales/pollo</li>
                <li>Aceite de oliva extra virgen</li>
                <li>Ajo</li>
                <li>Albahaca</li>
                <li>Pan</li>
            </ul>
        </div>
    </div>
        
  )
}
