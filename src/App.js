import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import BackgroundImg from './background/backgroundImg';
import Null from "./null/null";
import Antd from "../src/antd"

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <Null />
              </Route>
              <Route path="/background">
                  <BackgroundImg />
              </Route>
              <Route path="/null">
                  <Null />
              </Route>
              <Route path="/antd">
                  <Antd />
              </Route>

          </Switch>
      </Router>
  );
}


export default App;
