import React, { Component } from "react";
import "./App.scss";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import FullApp from './component/FullApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={FullApp} />
            <Route path="/favoris" component={FullApp} />
            <Route path="/itineraire" component={FullApp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;