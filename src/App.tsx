import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavBarAndFooter/Navbar';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { Route, Switch , useHistory} from 'react-router-dom';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { oktaConfig } from './lib/oktaConfig';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';

const oktaAuth = new OktaAuth(oktaConfig);

function App() {

  const customAuthHandler = () => {
    history.push('/login');
  }

  const history = useHistory();

  const restoreOriginalUri = async(_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));  
  }

  return (
    <>
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
         </Route>
          <Route path="/search">
            <SearchBooksPage />
          </Route>
          <Route path='/login' render={() => <LoginWidget config={oktaConfig} />}/>
          <Route path='/login/callback' component={LoginCallback} />
        </Switch>       
        <Footer />
        </Security>
    </>
    
  );
}

export default App;
