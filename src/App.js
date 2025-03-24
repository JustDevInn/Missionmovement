import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Program from './pages/Program';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

// Auth
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PaidRoute from "./components/PaidRoute";
import AdminRoute from "./components/AdminRoute";

// Dashboard Pages
import Dashboard from "./dashboard/Dashboard";
import Library from "./dashboard/library/Library";
import TrainingProgram from "./dashboard/training/TrainingProgram";
import Tracker from "./dashboard/tracker/Tracker";
import Progress from "./dashboard/progress/Progress";
import CheckIn from "./dashboard/checkin/CheckIn";

// Admin Pages
import AdminDashboard from "./admin/AdminDashboard";
import UploadVideo from "./admin/UploadVideo";
import ManageVideos from "./admin/ManageVideos";
import ManageUsers from "./admin/ManageUsers";

const MainRoutes = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/library") ||
    location.pathname.startsWith("/trainingprogram") ||
    location.pathname.startsWith("/check-in") ||
    location.pathname.startsWith("/tracker") ||
    location.pathname.startsWith("/progress") ||
    location.pathname.startsWith("/nutrition") ||
    location.pathname.startsWith("/messages") ||
    location.pathname.startsWith("/settings") ||
    location.pathname.startsWith("/admin");

  return (
    <>
      {!isDashboardRoute && <Nav />}
      <ScrollToTop />
      <div className="pt-24 md:pt-32">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />

          {/* Open Dashboard Pages */}
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/progress" element={<Progress />} />

          {/* Paid User Pages */}
          <Route path="/trainingprogram" element={<PaidRoute><TrainingProgram /></PaidRoute>} />
          <Route path="/check-in" element={<PaidRoute><CheckIn /></PaidRoute>} />
          <Route path="/library" element={<PaidRoute><Library /></PaidRoute>} />

          {/* Authenticated Dashboard */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>}>
            <Route path="upload" element={<UploadVideo />} />
            <Route path="manage-videos" element={<ManageVideos />} />
            <Route path="manage-users" element={<ManageUsers />} />
          </Route>
        </Routes>
      </div>
      {!isDashboardRoute && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <MainRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
