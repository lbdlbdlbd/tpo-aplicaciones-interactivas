import "./post.css"
import chocolateCake from './chocolateCake.jpg'
import { ImStarFull,ImStarHalf,ImStarEmpty } from "react-icons/im";
import { Link } from 'react-router-dom';

export default function Post3() {
  return (
    <div className="post">
        <img 
            className="postImg" 
            src={chocolateCake} 
            alt="simple chocolate cake"/>
        <div className="container">
            <div className="postInfo">
                <span className="postTitle">Torta de chocolate</span>
                <div className="postCats">
                    <span className="postCat">Postre</span>
                    <span className="postCat">Vegetariano</span>
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

            <Link to={"/recetas/Torta de chocolate"}><h3 className="continueReading">Continuar leyendo</h3></Link>

            <ul className="postIngr">
                <li>harina 0000</li>
                <li>azucar</li>
                <li>cacao</li>
                <li>sal</li>
                <li>cafe</li>
                <li>manteca</li>
            </ul>
        </div>
        
    </div>
        
  )
}
