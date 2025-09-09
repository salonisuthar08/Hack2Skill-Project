import React from "react";
import "./Features.css";

import Pottery from '../../assets/pottery.webp';
import Jewelry from '../../assets/jewelry.webp';
import Sculptures from '../../assets/sculp.webp';

const features = [
  { img: Pottery, title: "Pottery", desc: "Handmade pottery reflecting ancient daily life and rituals." },
  { img: Jewelry, title: "Jewelry", desc: "Ornaments that symbolize tradition, beauty, and history." },
  { img: Sculptures, title: "Sculptures", desc: "Stone and clay sculptures telling stories of ancestors." },
];

const Features = () => {
  const handleUpload = (category) => {
    alert(`Upload more items for ${category}`);
    // later -> open file upload or modal form
  };

  return (
    <section id="features" className="features">
      <h2>Our Collection</h2>
      <div className="feature-cards">
        {features.map((f, i) => (
          <div className="card" key={i}>
            <img src={f.img} alt={f.title} />
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <button 
              className="upload-btn" 
              onClick={() => handleUpload(f.title)}
            >
              + Upload More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
