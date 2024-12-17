// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import ReturnInitiation from './pages/ReturnInitiation';
import Tracking from './pages/Tracking';
import RMA from './pages/RMA'; // Import the new RMA page

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Your Return Logistics Company</h1>} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/return-initiation" element={<ReturnInitiation />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/rma" element={<RMA />} /> {/* New route for RMA */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;