import React from "react";
import Navbar from "./Navbar";
import Carusel from "./Carusel";
import "./Home.css";
import Footer from './Footer'; 

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="divv">
        <h1>Welcome to SoleStyle – Where Fashion Meets Comfort </h1>
        At SoleStyle, we believe that every step you take should be a statement.
        Whether you're striding into the boardroom, strolling through the park,
        or dancing the night away, our shoes are designed to keep you stylish,
        comfortable, and confident.
        <br></br>
        Why Choose Us?
        <ul>
          <li>
            Unparalleled Comfort: Premium materials and innovative designs to
            support your every move.
          </li>
          <li>
            Timeless Style: A curated collection that balances classic elegance
            with the latest trends.
          </li>
          <li> Quality You Can Trust: Handcrafted with care, built to last.</li>
        </ul>
        <h2>Discover Your Perfect Pair</h2>
        From sleek formal wear to casual must-haves, athletic essentials to
        unique statement pieces, we’ve got something for everyone. Explore our
        collections and find shoes that fit your personality and lifestyle.
        <h2>Join the SoleStyle Community</h2>
        Step into a world of endless possibilities. With SoleStyle, it’s not just
        about wearing shoes—it’s about expressing who you are, one step at a
        time.
        <h2>Shop Now and Step Up Your Style!</h2> Your perfect fit awaits. Dive
        into our collections today and experience the difference. At SoleStyle,
        we’re here to keep you walking tall.
      </div>
      <Carusel />
     <Footer/>
    </div>
  );
};

export default Home;
