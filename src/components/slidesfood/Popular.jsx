import "./slides.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";


function Popular() {
     //en este useState guardamos la data del api
    const [popular,setPopular] = useState([]);
    //usado para traer la data la primera vez que se carga
    useEffect(() => {
        getPopular();
    }, []);
    //para sacar las recetas de un api
    const getPopular = async () => {
        //guardar en el cache información
        const check = localStorage.getItem('popular');

        if (check){
            //si encuentro en local storage quiero guardarlo para no buscarlo de vuelta de la API
            setPopular(JSON.parse(check));
        } else{
            //GET y al final estado para guardar la data
            const api = await fetch("./public/data.json");
            const data = await api.json();
            let dataP = [];
            data.map((item)=> {
                if (item.category.include("popular")){dataP.push(item);}
                return(dataP);
            })
            //seteamos el storage en un string porque no conoce arrays
            localStorage.setItem('popular', JSON.stringify(dataP));
            setPopular(dataP);
        }
    }
  return (
    <div>
        <div className ="Wrapper">
            <h3> Selección de comida Argentina </h3>
            <Splide optins={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem',
            }}>
            {popular.map((recipe) => {
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
  );
}

export default Popular