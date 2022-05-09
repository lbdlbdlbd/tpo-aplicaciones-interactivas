import { useState } from 'react'
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import { motion } from "framer-motion"

function Recetas( {data} ) {

    let { name }  = useParams();
    const [activeTab, setActiveTab] = useState("instructions");
    
      let recipe = [];
      for(let i = 0;i < data.length; i++){
          if (data[i].title === name){
              recipe = data[i];
          }
      };

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit= {{opacity: 0}}
  >

    <DetailWrapper>
        <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.img} alt={recipe.title} />
        </div>
        <Info>
            <Button className={activeTab === "instructions" ? 'active': ''} onClick={()=> setActiveTab('instructions')}>
                Instrucciones
            </Button>
            <Button className={activeTab === "ingredients" ? 'active': ''} onClick={()=> setActiveTab('ingredients')}>
                Ingredientes
            </Button>
            {activeTab === "instructions" && (
                <div>
                    <h3>{recipe.instructions} </h3>
                </div>
            )}
            {activeTab === "ingredients" && (
                <ul>
                    {recipe.ingredients.map((ingredient) => 
                        <li key={ingredient}>{ingredient}</li>
                    )}
                </ul>
            )}
        </Info>
    </DetailWrapper>
    </motion.div>
  )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
        margin-left: 30px;
    }
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;

    }
    ul{
        margin-top: 2rem;
    }
    img{
        width: 600px;
        height: 600px;
        margin: 30px;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;

export default Recetas