import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  
  return (
    <Router>
      <TopBar/>
      <AnimatedRoutes/>
    </Router> 
  );
};

export default App;
