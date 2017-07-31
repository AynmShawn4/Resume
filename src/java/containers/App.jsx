import React from 'react';
import {Route, Switch} from 'react-router-dom';
import WelcomePage from './WelcomePage.jsx';
import MainPage from './MainPage.jsx';

const main = (
	<div>
		<Switch>
	      <Route exact path='/' component={WelcomePage}/>
        <Route path='/main' component={MainPage}/>
	    </Switch>
	</div>
);

class App extends React.Component {
    render() {
      return (
         <div>
            {main}
         </div>
      );
   }
}

export default App;