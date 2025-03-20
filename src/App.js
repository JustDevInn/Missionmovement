import React from 'react';
// Import Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Scroll helper
import ScrollToTop from './utils/ScrollToTop';
// Import components
import Nav from './components/Nav';
import Footer from './components/Footer';
// Import pages
import Home from './pages/Home';
import Program from './pages/Program';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
// Import Auth
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Nav />
        <ScrollToTop />
        <div className="pt-24 md:pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/program" element={<Program />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Protect the dashboard route */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
