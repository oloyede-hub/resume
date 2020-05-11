import React from 'react';
import PageWrapper from './components/PageWrapper';
import About from './components/pages/About'
import Experience from './components/pages/Experience';
import Education from './components/pages/Education'
import Skills from './components/pages/Skills'
import Award from './components/pages/Award';
import Interest from './components/pages/Interest';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <PageWrapper>
      <Route
      exact={true}
      path="/about"
      component={About}
      />
      <Route
      path="/experience"
      component={Experience}
      />
      <Route
      path="/education"
      component={Education}
      />
      <Route
      path="/skills"
      component={Skills}
      />
      <Route
      path="/interests"
      component={Interest}
      />
      <Route
      path="/awards"
      component={Award}
      />
      </PageWrapper>
    </Router>
      
    
  );
}

export default App;
