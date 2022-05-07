
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Settings from "../pages/settings/Settings";
import Home from "../pages/home/Home"
import Single from "../pages/single/Single";
import Write from "../pages/write/Write";
import Buscar from "../pages/buscar/Buscar";
import { Routes,Route, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    const user = false;
  return (
    <div>
        <AnimatePresence>
            <Routes location={location} key= {location.pathname}>
                <Route path="/" element={<Home/>}></Route>
                {/* <Route path="/buscar" element={<Buscar/>}/>
                <Route path="/searched/:search" element={<Searched/>}/>
                <Route path="/cousine/:type" element={<Cousine/>}/>
                <Route path="/recipe/:name" element={<Recipe/>}/>
                */}
                <Route path="/register" element={user ? <Home/> : <Register/>}></Route>
                <Route path="/login" element={user ? <Home/> : <Login/>}></Route>
                <Route path="/settings" element={user ? <Settings/> : <Register/>}></Route>
                <Route path="/write" element={user ? <Write/> : <Register/>}></Route>
                <Route path="/buscar" element={<Buscar/>}/>
                <Route path="/post/:postId" element={<Single/>}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes