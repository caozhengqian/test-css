import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import BackgroundImg from './background/backgroundImg';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <BackgroundImg />
              </Route>
              <Route path="/background">
                  <BackgroundImg />
              </Route>
          </Switch>
      </Router>
  );
}


export default App;
