import React from 'react';
// import router
import  {BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
// import pages
import Nav from './components/Nav';
import Home from './components/Home';
import Program from './components/Program';
import About from './components/About';
import Resources from './components/Resources';
import Contact from './components/Contact'
import Footer from './components/Footer';


const App = () => {
  return (
    <>
    <Router>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/program' element={<Program />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/resources' element={<Resources />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
};

export default App;