import "./slides.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';


function Veggie(props) {
    return(
    <div>
        <div className ="wrapper">
            <h3> Selección de comida Vegetariana </h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem',
            }}>
            {props.map((recipe) => {
                return(
                    <SplideSlide key={recipe.id}>
                        <div className="card">
                            <Link to={"/recetas/" + recipe.id}>
                                <p className="buscarP">{recipe.title}</p>
                                <img src={recipe.img} alt ={recipe.title} className="imgBuscar"/>
                                <div className="gradient"></div>
                            </Link>
                        </div>
                    </SplideSlide>
                );
            })}
            </Splide>
        </div>
    </div>
    )
}

export default Veggie