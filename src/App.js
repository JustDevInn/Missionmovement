import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import { HelmetProvider } from "react-helmet-async";

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
import Blogs from './pages/Blogs.jsx';
import SingleBlog from './pages/blogs/SingleBlog';
import Mariniers from "./pages/units/Mariniers";
import CommandoTroepen from "./pages/units/KorpsCommandoTroepen";
import Luchtmobiel from "./pages/units/LuchtmobieleBrigade";

// Auth
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PaidRoute from "./components/PaidRoute";
import AdminRoute from "./components/AdminRoute";

// Dashboard Pages
import Dashboard from "./dashboard/Dashboard";
import Library from "./dashboard/library/Library";
import TrainingProgram from "./dashboard/training/TrainingProgram";
import TrainingSchedule from "./dashboard/trainingschedule/TrainingSchedule.jsx"
import Progress from "./dashboard/progress/Progress";
import CheckIn from "./dashboard/checkin/CheckIn";
import Messages from './dashboard/messages/Messages';
import Nutrition from './dashboard/nutrition/Nutrition';
import Settings from './dashboard/settings/Settings';

// Admin Pages
import AdminHome from './admin/AdminHome.jsx';
import AdminDashboard from "./admin/AdminDashboard";
import UploadVideo from "./admin/UploadVideo";
import ManageVideos from "./admin/ManageVideos";
import ManageUsers from "./admin/ManageUsers";
import ManageTrainingProgram from './admin/ManageTrainingProgram';
import UploadTrainingProgram from './admin/UploadTrainingProgram';
import MessagesAdmin from './admin/MessagesAdmin.jsx';
import UploadBlog from './admin/UploadBlog.jsx';
import ManageBlog from './admin/ManageBlog.jsx';

// Layout
import DashboardLayout from "./layouts/DashboardLayout";
import Stopwatch from './dashboard/stopwatch/StopWatch';

import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/PageWrapper"; 

const MainRoutes = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/library") ||
    location.pathname.startsWith("/trainingprogram") ||
    location.pathname.startsWith("/check-in") ||
    location.pathname.startsWith("/trainingschedule") ||
    location.pathname.startsWith("/progress") ||
    location.pathname.startsWith("/stopwatch") ||
    location.pathname.startsWith("/nutrition") ||
    location.pathname.startsWith("/messages") ||
    location.pathname.startsWith("/settings") ||
    location.pathname.startsWith("/admin");

  return (
<>
  {!isDashboardRoute && <Nav />}
  <ScrollToTop />

  {isDashboardRoute ? (
    <Routes>
      {/* Protected Dashboard Routes with Shared Sidebar */}
      <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/trainingschedule" element={<TrainingSchedule />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/check-in" element={<PaidRoute><CheckIn /></PaidRoute>} />
        <Route path="/trainingprogram" element={<PaidRoute><TrainingProgram /></PaidRoute>} />
        <Route path="/library" element={<PaidRoute><Library /></PaidRoute>} />
      </Route>

      {/* Admin Dashboard Routes */}
      <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>}>
  <Route index element={<AdminHome />} />
  <Route path="upload" element={<UploadVideo />} />
  <Route path="manage-videos" element={<ManageVideos />} />
  <Route path="manage-users" element={<ManageUsers />} />
  <Route path="manage-program" element={<ManageTrainingProgram />} />
  <Route path="upload-program" element={<UploadTrainingProgram />} />
  <Route path="manage-blog" element={<ManageBlog />} />
  <Route path="upload-blog" element={<UploadBlog />} />
  <Route path="messagesadmin" element={<MessagesAdmin />} />
</Route>


    </Routes>
  ) : (
    <div className="pt-18 md:pt-20">
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<SingleBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/units/mariniers" element={<PageWrapper><Mariniers /></PageWrapper>} />
        <Route path="/units/commandotroepen" element={<PageWrapper><CommandoTroepen /></PageWrapper>} />
        <Route path="/units/luchtmobiel" element={<PageWrapper><Luchtmobiel /></PageWrapper>} />
      </Routes>
      </AnimatePresence>
    </div>
  )}

  {!isDashboardRoute && <Footer />}
</>

  );
};

const App = () => {
  return (
    <AuthProvider>
      <HelmetProvider>
        <Router>
          <MainRoutes />
        </Router>
      </HelmetProvider>
    </AuthProvider>
  );
};


export default App;
