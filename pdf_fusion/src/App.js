import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Merge from './components/merge/Merge';
import Split from './components/split/Split';
import Annotate from './components/annotate/Annotate';
import Navbar from './components/header/Navbar';  // Import the Navbar
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar will always be visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merge" element={<Merge />} />
        <Route path="/split" element={<Split />} />
        <Route path="/annotate" element={<Annotate />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
