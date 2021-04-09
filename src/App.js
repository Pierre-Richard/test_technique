import React from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Posts from './page/Posts';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Posts}/>
        </Switch>
      </BrowserRouter>

    </div>
  );

};
export default App;