import React from 'react'
import HeaderSec from "../../components/header/HeaderSec";
import Popular from "../../components/slidesfood/Popular";
import Veggie from "../../components/slidesfood/Veggie";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

function Buscar() {
  const [data,setData]=useState([]);
    const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
          });
      }
      useEffect(()=>{
        getData()
      },[])
    
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit= {{opacity: 0}}
    >
      <HeaderSec/>
      {
       data && data.length>0 && data.map(()=>{return(
         <div>
            <Popular />
            <Veggie />
         </div>
       
       )
       })
      }
    </motion.div>
  )
}

export default Buscar