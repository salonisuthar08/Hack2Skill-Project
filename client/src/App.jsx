import React from "react";
import Navbar from "./components/Navbar/Navbar";
import SellerNavbar from "./components/Navbar/SellerNavbar";
import Home from "./components/Home/Home";
import Features from "./components/Features/features";
import Footer from "./components/Footer/Footer";
import ProductUpload from "./components/ProductUpload/ProductUpload";
import "./index.css";
import RegisterSeller from "./components/Login/Artist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyerLogin from "./components/Login/buyer";
import SellerDashboard from "./components/Profile/SellerDashboard";
import SellerProfile from "./components/Profile/sellerProfile";
import MyArtworks from "./components/Profile/MyArtworks";
import SalesHistory from "./components/Profile/SalesHistory";
import UploadNewArt from "./components/Profile/UploadNewArt";


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                  <Features />
                  <ProductUpload />
                </>
              }
            />
            <Route
              path="/register-seller"
              element={
                <>
                  <Navbar />
                  <RegisterSeller />
                  <Footer />
                </>
              }
            />
            <Route
              path="/buyer-login"
              element={
                <>
                  <Navbar />
                  <BuyerLogin />
                  <Footer />
                </>
              }
            />
            <Route path="/ArtistDashboard" element={<>
              <SellerNavbar />
              <SellerDashboard />
              </>}
               />
            <Route path="/my-artworks" element={<>
              <SellerNavbar />
              <MyArtworks />
            </>} />
            <Route path="/sales-history" element={<>
              <SellerNavbar />
              <SalesHistory />
            </>} />
            <Route path="/upload-new-art" element={<>
              <SellerNavbar />
              <UploadNewArt />
            </>} />
            <Route
              path="/sellerprofile"
              element={
                <>
                  <SellerNavbar />
                  <SellerProfile />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}


export default App;
