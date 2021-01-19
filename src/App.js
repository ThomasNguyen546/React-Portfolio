import React from 'react';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';


function App() { 
  return (
    <div>
    <HashRouter>
    <div id="wrapper">
      <Header></Header>
     <Switch>
            <Route exact={true} path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
     </Switch>
     <Footer></Footer>
    </div>
    </HashRouter>
    </div>
  )
}

export default App;