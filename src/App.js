import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Home from './pages/home/home';
import Menu from './components/menu/menu';
import Profile from './pages/profile/profile';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <>
          <Menu />
          <Route exact path="/home" component={Home} />
          <Route exact path="/changeProfile" component={Profile} />
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
