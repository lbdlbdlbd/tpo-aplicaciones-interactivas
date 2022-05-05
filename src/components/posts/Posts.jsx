import Post1 from '../post/Post1';
import Post2 from '../post/Post2';
import Post3 from '../post/Post3';
import Post4 from '../post/Post4';
import './posts.css';


export default function Posts() {
  return (
    <div className='posts'>
      <h1 className="tituloNov">Últimas actualizaciones</h1>
        <Post1/>
        <hr className="sep"/>
        <Post2/>
        <hr className="sep"/>
        <Post3/>
        <hr className="sep"/>
        <Post4/>
        <hr className="sep"/>
    </div>
  )
}
