import React from 'react';
// import router
import  {BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
// import pages
import Nav from './components/Nav';
import Home from './pages/Home';
import Program from './pages/Program';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact'
import Footer from './components/Footer';


const App = () => {
  return (
    <>
    <Router>
      <Nav />
      <ScrollToTop />
      <div className='pt-24 md:pt-32'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/program' element={<Program />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/resources' element={<Resources />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      </div>
      <Footer />
    </Router>
    </>
  );
};

export default App;