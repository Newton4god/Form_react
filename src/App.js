import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FormPage from './Components/FormPage' 
import Info from './Components/InfoPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <FormPage />
          </Route>
          <Route exact path="/info">
            <Info />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
