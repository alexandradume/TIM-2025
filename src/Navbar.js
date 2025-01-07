import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import Tooltip from "./Tooltip";

const Navbar = () => {
const navigate = useNavigate();


  const homeImage = process.env.PUBLIC_URL + '/home.png'
  const shoeImage =process.env.PUBLIC_URL + '/shoes.png'
  const cartImage = process.env.PUBLIC_URL + '/shopping-cart.png';

  const [windowFullyVisible, setWindowFullyVisible] = useState(true);

  useEffect(() => {

    const handleWindowResize = () => {
      const fullyVisible = window.innerWidth === document.body.clientWidth;
      setWindowFullyVisible(fullyVisible);
    };

   
    window.addEventListener("resize", handleWindowResize);

    
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

 
  const handleRedirect = (pathname, state) => {
    navigate({ pathname, state });
  };

  const handleRedirect1 = (pathname) => {
    navigate({ pathname });
  };

  return (
    <div className="navbar variant2">
      <a onClick={() => handleRedirect1("/acasa")}>
        <Tooltip text="Acasa">
          <img
            style={{
              height: "40px",
              width: "40px",
              marginBottom: "0px",
            }}
            src={homeImage}
            alt="Acasa"
          />
        </Tooltip>
      </a>

      <a onClick={() => handleRedirect1("/produse")}>
        <Tooltip text="Produse">
          <img
            style={{
              height: "40px",
              width: "40px",
              marginBottom: "0px",
            }}
            src={shoeImage}
            alt="Produse"
          />
        </Tooltip>
      </a>
      <a onClick={() => handleRedirect1("/checkout")}>
        <Tooltip text="Checkout">
          <img
            style={{
              height: "40px",
              width: "40px",
              marginBottom: "0px",
            }}
            src={cartImage}
            alt="Checkout"
          />
        </Tooltip>
      </a>
      <span className="brand">
       SoleStyle
      </span>
    </div>
  );
};

export default Navbar;
