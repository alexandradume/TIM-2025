import React, { useState } from "react";
import "./Carusel.css";

const Carusel = () => {
  const images = [
    process.env.PUBLIC_URL + '/1.webp', // Utilizăm calea relativă corectă
    process.env.PUBLIC_URL + '/2.webp',
    process.env.PUBLIC_URL + '/3.webp',
  ]; // Listează URL-urile imaginilor
  const [currentIndex, setCurrentIndex] = useState(0); // Indexul imaginii afișate curent

  const arrowhead  =  process.env.PUBLIC_URL + 'arrowhead.png'
   const arrowheadd  =  process.env.PUBLIC_URL + 'arrowheadd.png'
  // Navigarea la următoarea imagine
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigarea la imaginea anterioară
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carusel">
      <div className="carusel-container">
        <button className="prev-button" onClick={prevImage}>
          <img
            style={{ width: "25px" }}
            src= {arrowheadd} 
            alt="Arrow"
          />
        </button>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="carusel-image"
        />
        <button className="next-button" onClick={nextImage}>
          <img
            style={{ width: "25px" }}
            src={arrowhead}
            alt="Arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default Carusel;
