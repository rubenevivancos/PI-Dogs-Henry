import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './Components/LandingPage/landingPage';
import Home from './Components/Home/home';
import CreateDog from './Components/CreateDog/createDog.js';
import DogDetail from './Components/DogDetail/dogDetail.js';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dogs" component={Home} />
        <Route exact path="/createDog" component={CreateDog} />
        <Route exact path="/dogDetail/:id" component={DogDetail} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;