import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'


function App() {
  return (

    // BEM
    <div className="app">
        <Header />
        
      
            <SearchPage />
           
            <Home />
        
        <Footer />
    </div>
  );
}

export default App;
