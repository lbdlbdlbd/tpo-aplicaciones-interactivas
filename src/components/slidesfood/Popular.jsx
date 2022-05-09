import "./slides.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Popular({data}) {

    const filteredPopular = data.filter((item) =>
      item.category.includes("popular")
    );
    
  return (
    <div>
        <div className ="wrapper">
            <h3> Selección de comida Argentina </h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem',
            }}>
           {filteredPopular && filteredPopular.map((recipe) => {
                    return(
                        <SplideSlide key={recipe.id}>
                            <div className="card">
                                <Link to={"/recetas/" + recipe.title}>
                                    <p className="buscarP">{recipe.title}</p>
                                    <img className="imgBuscar" src={recipe.img} alt ={recipe.title} />
                                    <div className="gradient"></div>
                                </Link>
                            </div>
                        </SplideSlide>
                    );
            })}
            </Splide>
        </div>
    </div>
  );
}

export default Popular