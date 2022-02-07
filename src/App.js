import React,{ Component } from 'react';
import './App.css';
import Precios from './Components/Precios/Precios';
import ReactBootstrap from './Components/ReactBootstrap/ReactBootstrap';
import Footer from './Components/Footer/Footer';
import Video from './Components/Video/Video';
import Galeria from './Components/Galeria/Galeria';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class App extends Component{
  
  render () {
    return (
      <div className="App">

    <Router>
    <ReactBootstrap />
      <br/>
        <Routes>
          
          <Route exact path="/" element={<Video/>}/>
          <Route exact path="/home" element={<Video/>}/>
          <Route exact path="/paquetes" element={<Precios />}/>
          <Route exact path="/galeria" element={<Galeria />}/>
        </Routes>
        <Footer />
    </Router>
    

        
        
        

        
        
        
  

        
      </div>
    )
  }
}

export default App;
