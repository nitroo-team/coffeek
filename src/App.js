import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/home'
import Menu from './components/menu/menu'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <>
          <Menu />
          <Route exact path="/home" component={Home} />
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
