import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import BackgroundImg from './style/background/backgroundImg';
import Null from "./null/null";
import Antd from "../src/antd";
import Work from "../src/work";
import GongNeng from "../src/gongneng";
import Style from "../src/style";


function App() {
  return (
       <Router>
          <Switch>
              <Route exact path="/">
                  <Null />
              </Route>
              <Route path="/style">
                  <Style />
              </Route>
              <Route path="/null">
                  <Null />
              </Route>
              <Route path="/antd">
                  <Antd />
              </Route>
              <Route path="/work">
                  <Work />
              </Route>
              <Route path="/gongneng">
                  <GongNeng />
              </Route>

          </Switch>
      </Router>
  );
}


export default App;
