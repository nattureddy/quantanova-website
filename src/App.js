// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TimelinePage from "./pages/TimelinePage";
import ContactPage from "./pages/ContactPage";
import OthersPage from "./pages/OthersPage";
import PrizesPage from "./pages/PrizesPage";
import TracksPage from "./pages/TracksPage";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen font-rubik">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/others" element={<OthersPage />} />
          <Route path="/prizes" element={<PrizesPage />} />
          <Route path="/tracks" element={<TracksPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
