import React from 'react';
import {Route, Switch} from 'react-router-dom';
import WelcomePage from './WelcomePage.jsx';
import MainPage from './MainPage.jsx';

class App extends React.Component {
    render() {
      return (
          <Switch>
            <Route exact path='/' component={WelcomePage}/>
            <Route path='/main' component={MainPage}/>
          </Switch>
       );
   }
}

export default App;