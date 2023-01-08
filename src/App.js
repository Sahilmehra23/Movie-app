import React from 'react'
import './App.css';
import Home from './components/Home';
import Watchlist from './components/Watchlist';
import Contact from './components/Contact';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watchlist' element={<Watchlist/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
    </Router>

   
    
  );
}

export default App
