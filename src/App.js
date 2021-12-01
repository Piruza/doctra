import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

import './App.css';
import Calendar from './views/calendar/Calendar';
import Explore from './views/explore/Explore';
import Home from './views/home/Home';

const App = () => {
  return ( 
    <div className="wrapper">
      <BrowserRouter>
        <Routes  >
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/explore" element={ <Explore /> } />
          <Route exact path="/calendar" element={ <Calendar /> } />
        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;