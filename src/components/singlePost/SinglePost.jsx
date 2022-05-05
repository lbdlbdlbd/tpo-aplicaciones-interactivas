import "./singlePost.css"
import salad from './salad.png'

export default function SinglePost() {
  return (
    <div className="singlePost">
        
        <div className="singlePostWrapper">    
            <img src={salad} alt="" className="singlePostImg"></img>
            <h1 className="singlePostTitle">
                Ensalada con pocos ingredientes
                {/*<div className="singlePosEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>*/}
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Autor:<b>Harry Styles</b></span>
                <span className="singlePostDate">Hace 1 hora</span>
            </div>
            <p className="singlePostDesc">
                <h3 className="singlePostTitle">Ingredientes</h3>
                <ol className="singlePostIngredients">
                    <li>Huevos</li>
                    <li>Leche</li>
                    <li>Azucar</li>
                    <li>Harina</li>
                </ol>
                <h3 className="singlePostTitle">Pasos a seguir</h3>    
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! 
                Rem commodi debitis velit vero quisquam aperiam, 
                deleniti hic aliquam incidunt eligendi asperiores totam rerum eaque unde. 
                Blanditiis, accusantium porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! 
                Rem commodi debitis velit vero quisquam aperiam, 
                deleniti hic aliquam incidunt eligendi asperiores totam rerum eaque unde. 
                Blanditiis, accusantium porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! 
                Rem commodi debitis velit vero quisquam aperiam, 
                deleniti hic aliquam incidunt eligendi asperiores totam rerum eaque unde. 
                Blanditiis, accusantium porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! 
                Rem commodi debitis velit vero quisquam aperiam, 
                deleniti hic aliquam incidunt eligendi asperiores totam rerum eaque unde. 
                Blanditiis, accusantium porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! 
                Rem commodi debitis velit vero quisquam aperiam, 
                deleniti hic aliquam incidunt eligendi asperiores totam rerum eaque unde. 
                Blanditiis, accusantium porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! 
                Rem commodi debitis velit vero quisquam aperiam, 
                deleniti hic aliquam incidunt eligendi asperiores totam rerum eaque unde. 
                Blanditiis, accusantium porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! 
                Rem commodi debitis velit vero quisquam aperiam, 
                deleniti hic aliquam incidunt eligendi asperiores totam rerum eaque unde. 
                Blanditiis, accusantium porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! 
                Rem commodi debitis velit vero quisquam aperiam, 
                deleniti hic aliquam incidunt eligendi asperiores totam rerum eaque unde. 
                Blanditiis, accusantium porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! 
                Rem commodi debitis velit vero quisquam aperiam, 
                deleniti hic aliquam incidunt eligendi asperiores totam rerum eaque unde. 
                Blanditiis, accusantium porro?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! 
                Rem commodi debitis velit vero quisquam aperiam, 
                deleniti hic aliquam incidunt eligendi asperiores totam rerum eaque unde. 
                Blanditiis, accusantium porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! 
                Rem commodi debitis velit vero quisquam aperiam, 
                deleniti hic aliquam incidunt eligendi asperiores totam rerum eaque unde. 
                Blanditiis, accusantium porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! 
                Rem commodi debitis velit vero quisquam aperiam, 
                deleniti hic aliquam incidunt eligendi asperiores totam rerum eaque unde. 
                Blanditiis, accusantium porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! 
                Rem commodi debitis velit vero quisquam aperiam, 
                deleniti hic aliquam incidunt eligendi asperiores totam rerum eaque unde. 
                Blanditiis, accusantium porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! 
                Rem commodi debitis velit vero quisquam aperiam, 
                deleniti hic aliquam incidunt eligendi asperiores totam rerum eaque unde. 
                Blanditiis, accusantium porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! 
                Rem commodi debitis velit vero quisquam aperiam, 
                deleniti hic aliquam incidunt eligendi asperiores totam rerum eaque unde. 
                Blanditiis, accusantium porro?
            </p>
        </div>
    </div>
  )
}