import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import { Link, Element, animateScroll as scroll } from "react-scroll";
import NavBar from './components/navbar/Navbar';
import Watches from './components/watches/Watches';
import FineJewelry from './components/Fine Jewelry/FineJewelry';
import Accessories from './components/accessories/Accessories';


import Home from './components/home/Home';
import Footer from './components/footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Link
  to="training"
  smooth={true}
  duration={500}
  offset={-50}
  spy={true}
  exact="true"
  activeClass="active"
>
  
</Link>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        
      
       
      </Routes >
      
      <NavBar/>
      
    </div>
    <NavBar/>
    <Accessories/>
    <FineJewelry/>
    <Watches/>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
