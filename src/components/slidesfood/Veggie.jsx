import "./slides.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";


function Veggie() {
     //en este useState guardamos la data del api
    const [veggie,setVeggie] = useState([]);
    //usado para traer la data la primera vez que se carga
    useEffect(() => {
        getVeggie();
    }, []);
    //para sacar las recetas de un api
    const getVeggie = async () => {
        //guardar en el cache información
        const check = localStorage.getItem('veggie');

        if (check){
            //si encuentro en local storage quiero guardarlo para no buscarlo de vuelta de la API
            setVeggie(JSON.parse(check));
        } else{
            //GET y al final estado para guardar la data
            const api = await fetch("../../../public/data.json");
            const data = await api.json();
            let dataV = [];
            data.map((item)=> {
                if (item.category.include("veggie") ){dataV.push(item);}
                return(dataV);
            })
            //seteamos el storage en un string porque no conoce arrays
            localStorage.setItem('veggie', JSON.stringify(dataV));
            setVeggie(dataV);
        }
    }
  return (
    <div>
        <div className ="Wrapper">
            <h3> Selección de comida Vegetariana </h3>
            <Splide optins={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem',
            }}>
            {veggie.map((recipe) => {
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

export default Veggie