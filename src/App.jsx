import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Features from './components/Features/features';
import Footer from './components/Footer/Footer';
import ProductUpload from './components/ProductUpload/ProductUpload';

function App() {
  return (
    <div>
     <Navbar/>
     <Home/>
     <Features/>
        <ProductUpload />
     <Footer/>
    </div>
  );
}

export default App;



