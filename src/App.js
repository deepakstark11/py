import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Wave from 'react-wavify'
import ParticleBackdrop from './components/Animation/ParticlesBackdrop';





function App() {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #4568DC 10%, #B06AB3 100%)'
    }}>
    <Router>
      <Navbar />
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
      </Switch>
    </Router>
    <ParticleBackdrop/>    <Wave fill='pink'
     paused={false}
     options={{
       height: 30,
       amplitude: 30,
       speed: 0.15,
       points: 20
     }}
    >
      <h1>Hello</h1>
      </Wave>
    </div>
  );
}
  
export default App;