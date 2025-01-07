import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.js";
import "./List.css";
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer.js";

const List = () => {
  const [temperature, setTemperature] = useState(null);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});

   const cartImage  =  process.env.PUBLIC_URL + 'shopping-cart.png'

  const imagesWithPrices = [
    {
      src: process.env.PUBLIC_URL + '/1.webp',
      price: 99.99,
      gender: "f",
      sizes: ["36", "37", "38", "39", "40"],
    },
    {
      src: process.env.PUBLIC_URL + '/2.webp',
      price: 149.99,
      gender: "f",
      sizes: ["36", "37", "38", "39", "40"],
    },
    {
      src: process.env.PUBLIC_URL + '/3.webp',
      price: 119.99,
      gender: "m",
      sizes: ["40", "41", "42", "43", "44"],
    },
    {
      src: process.env.PUBLIC_URL + '/4.webp',
      price: 89.99,
      gender: "m",
      sizes: ["40", "41", "42", "43", "44"],
    },
    {
      src: process.env.PUBLIC_URL + '/5.webp',
      price: 129.99,
      gender: "m",
      sizes: ["40", "41", "42", "43", "44"],
    },
    {
      src: process.env.PUBLIC_URL + '/6.webp',
      price: 159.99,
      gender: "m",
      sizes: ["40", "41", "42", "43", "44"],
    },
    {
      src: process.env.PUBLIC_URL + '/7.webp',
      price: 109.99,
      gender: "m",
      sizes: ["40", "41", "42", "43", "44"],
    },
    {
      src: process.env.PUBLIC_URL + '/8.webp',
      price: 79.99,
      gender: "f",
      sizes: ["36", "37", "38", "39", "40"],
    },
    {
      src: process.env.PUBLIC_URL + '/9.webp',
      price: 139.99,
      gender: "m",
      sizes: ["40", "41", "42", "43", "44"],
    },
    {
      src: process.env.PUBLIC_URL + '/10.webp',
      price: 109.99,
      gender: "f",
      sizes: ["36", "37", "38", "39", "40"],
    },
  ];

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch("https://wttr.in/Brasov?format=%t");
        const data = await response.text();
        setTemperature(parseFloat(data));
      } catch (error) {
        console.error("Eroare la obținerea temperaturii:", error);
      }
    };

    fetchTemperature();
  }, []);

  const addToCart = (src, price, size) => {
    if (!size) {
      alert(
        "Te rugăm să selectezi o mărime înainte de a adăuga produsul în coș!"
      );
      return;
    }
    setCart([...cart, { src, price, size }]);
  };

  const handleSizeChange = (index, size) => {
    setSelectedSizes({ ...selectedSizes, [index]: size });
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const recommendFootwear = (temp) => {
    if (temp === null) return null;

    if (temp < 0) {
      return "Ai o pereche de papuci de zăpadă?";
    } else if (temp < 20) {
      return "Recomandăm niște papuci călduroși.";
    } else {
      return "Niste sandale se potrivesc perfect cu vremea!";
    }
  };

  const redirectToCheckout = () => {
    if (cart.length === 0) {
      alert("Coșul este gol. Adaugă produse înainte de a plasa comanda.");
      return;
    }
    navigate("/checkout", { state: { cart } });

  };

  return (
    <div>
      <Navbar />
      <div className="divv">
        {temperature !== null && (
          <div className="temperature">
            Temperatura curentă: {temperature.toFixed(1)}°C
          </div>
        )}

        {temperature !== null && (
          <div className="footwear-recommendation">
            {recommendFootwear(temperature)}
          </div>
        )}

        <div className="image-list">
          {imagesWithPrices.map((image, index) => (
            <div key={index} className="image-card">
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="list-image"
              />
              <div className="image-price">{image.price.toFixed(2)} RON</div>

           
              <div className="size-selector">
                <label htmlFor={`size-${index}`}>Mărime:</label>
                <select
                  id={`size-${index}`}
                  value={selectedSizes[index] || ""}
                  onChange={(e) => handleSizeChange(index, e.target.value)}
                >
                  <option value="">Selectează</option>
                  {image.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

            
              <div
                className="cart-icon"
                onClick={() =>
                  addToCart(image.src, image.price, selectedSizes[index])
                }
              >
                <img
                  src={cartImage}
                  alt="Adaugă în coș"
                  className="cart-icon-image"
                />
              </div>
            </div>
          ))}
        </div>

       
        <div className="cart">
          <h2>Produse în coș:</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img
                  src={item.src}
                  alt={`Product ${index}`}
                  className="cart-image"
                />
                <span>
                  {item.price.toFixed(2)} RON - Mărime: {item.size}
                </span>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(index)}
                >
                  Șterge
                </button>
              </li>
            ))}
          </ul>
        </div>

        
        <button onClick={redirectToCheckout} className="checkout-button">
          Plasează comanda
        </button>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default List;
