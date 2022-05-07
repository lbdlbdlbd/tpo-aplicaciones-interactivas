import TopBar from "./components/topbar/TopBar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  
  return (
    <Router>
      <TopBar/>
      <AnimatedRoutes/>
      <Footer/>
    </Router> 
  );
};

export default App;
