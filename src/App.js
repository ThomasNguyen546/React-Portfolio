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
    <HashRouter>
    <div id="wrapper">
      <Header></Header>
     <Switch>
            <Route exact={true} path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
     </Switch>
     <Footer></Footer>
    </div>
    </HashRouter>
  )
}

export default App;