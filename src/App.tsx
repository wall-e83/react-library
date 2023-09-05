import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavBarAndFooter/Navbar';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
function App() {
  return (
    <>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
         </Route>
          <Route path="/search">
            <SearchBooksPage />
          </Route>
        </Switch>       
        <Footer />
    </>
    
  );
}

export default App;
