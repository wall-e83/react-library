import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavBarAndFooter/Navbar';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { Route, Switch , useHistory} from 'react-router-dom';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { oktaConfig } from './lib/oktaConfig';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth(oktaConfig);

function App() {

  const customAuthHandler = () => {
    history.push('/login');
  }

  const history = useHistory();
  
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
