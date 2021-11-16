import React from 'react'
import './App.scss'
import Navbar from "./components/layout/Navbar"
import Main from "./components/layout/Main"
import Footer from './components/layout/Footer'
import PL from "./components/pages/PremierLeague";
import PD from "./components/pages/Laliga";
import BL1 from "./components/pages/Bundesliga";
import FL1 from "./components/pages/Ligue1";
import SA from "./components/pages/SerieA";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={PL} />
          <Route path="/PD" component={PD} />
          <Route path="/BL1" component={BL1} />
          <Route path="/FL1" component={FL1} />
          <Route path="/SA" component={SA} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
