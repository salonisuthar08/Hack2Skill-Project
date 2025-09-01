import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Features from './components/Features/features';
import Footer from './components/Footer/Footer';
import ProductUpload from './components/ProductUpload/ProductUpload';
import './index.css';
import RegisterSeller from './components/Login/Artist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuyerLogin from './components/Login/buyer';
import ArtistDashboard from './components/Artist/ArtistDashboard';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Features />
              <ProductUpload />
            </>
          } />
          <Route path="/register-seller" element={<RegisterSeller />} />
          <Route path="/buyer-login" element={<BuyerLogin />} />
          <Route path="/ArtistDashboard" element={<ArtistDashboard/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



