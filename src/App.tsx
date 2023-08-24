import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavBarAndFooter/Navbar';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import { Heros } from './layouts/HomePage/components/Heros';
function App() {
  return (
    <>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
         </Route>
          <Route path="/search">
            <Heros />
          </Route>
        </Switch>       
        <Footer />
    </>
    
  );
}

export default App;
