
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Settings from "../pages/settings/Settings";
import Home from "../pages/home/Home"
import Single from "../pages/single/Single";
import Write from "../pages/write/Write";
import Buscar from "../pages/buscar/Buscar";
import Recetas from "../pages/buscar/Recetas";
import { Routes,Route, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";


function AnimatedRoutes() {
    const location = useLocation();
    const user = false;

    //fetch data del json file
    const [data,setData]=useState([]);
    useEffect(()=>{
        getData();
      },[]);

    const getData= async ()=>{

        const check = localStorage.getItem('data');

        if (check){
            setData(JSON.parse(check));
        } else{
        
            await fetch('data.json'
            ,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
            }
            )
            .then(function(response){
                return response.json();
            })
            .then(function(myJson) {
                localStorage.setItem('data', JSON.stringify(myJson));
                setData(myJson);
            });
        }
      }

  return (
    <div>
        <AnimatePresence>
            <Routes location={location} key= {location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/buscar" element={<Buscar data={data}/>}/>
                <Route path="/recetas/:name" element={<Recetas data={data}/>}/>
                <Route path="/register" element={user ? <Home/> : <Register/>}></Route>
                <Route path="/login" element={user ? <Home/> : <Login/>}></Route>
                <Route path="/settings" element={user ? <Settings/> : <Register/>}></Route>
                <Route path="/write" element={user ? <Write/> : <Register/>}></Route>
                <Route path="/post/:postId" element={<Single/>}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes