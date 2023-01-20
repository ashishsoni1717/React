import "./App.css";

// import Header from './Components/Header';
//import Header1 from './Components/Header1';
//import TinyFooter from './Components/TinyFooter';
// import ImpLink from './Components/ImpLink';
// import Navbar from './Components/Navbar';
import Home from "./Components/Layout/Home";
// import DSC from "./Components/Home/Display_State_Circular";
// import Layout from "./Components/Layout/Layout";
import { BrowserRouter as Router, Route, Redirect,Routes, Switch } from "react-router-dom";
import { HOME, LOGIN } from "./constants/Router";
import  Login  from "./Components/Login";

function App() {
  return (
    <Router>
   
    <Route exact path={HOME} render={(props) => <Home />} />
    <Route exact path={LOGIN} render={(props) => <Login />} />
   
     </Router>
       
  );
}
export default App;
