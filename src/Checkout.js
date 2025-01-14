import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar.js";
import "./Checkout.css";
import Footer from "./Footer.js";

const Checkout = () => {
  const location = useLocation();
  const state = location.state || {};

  const [cart, setCart] = useState(state.cart || []);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    paymentMethod: "",
    termsAccepted: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({
      name: "",
      address: "",
      email: "",
      phone: "",
      paymentMethod: "",
      termsAccepted: "",
    });

    let isValid = true;
    const newErrors = {};

    if (!name) {
      isValid = false;
      newErrors.name = "Numele este necesar.";
    }

    if (!address) {
      isValid = false;
      newErrors.address = "Adresa este necesară.";
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      newErrors.email = "Email-ul este invalid.";
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
      isValid = false;
      newErrors.phone = "Numărul de telefon trebuie să conțină 10 cifre.";
    }

    if (!paymentMethod) {
      isValid = false;
      newErrors.paymentMethod = "Te rugăm să selectezi o metodă de plată.";
    }

    if (!termsAccepted) {
      isValid = false;
      newErrors.termsAccepted = "Trebuie să accepți termenii și condițiile.";
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    alert("Comanda a fost plasată cu succes!");
    
    setCart([]);
    setName("");
    setAddress("");
    setEmail("");
    setPhone("");
    setPaymentMethod("");
    setTermsAccepted(false);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>
      <Navbar />
      <div className="divv">
        <div className="title">Ne bucuram ca ai ales produsele noastre!</div>
        <div>
          <h2>Produsele tale:</h2>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item, index) => (
                <li key={`${item.src}-${index}`} style={{ marginBottom: "20px" }}>
                  <img
                    src={item.src}
                    alt={`Product ${index + 1}`}
                    style={{
                      width: "100px",
                      height: "auto",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <p>Cantitate: 1 x {item.price.toFixed(2)} RON</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Coșul este gol.</p>
          )}
        </div>

        {cart.length > 0 && (
          <div className="total">
            <h3>Total: {calculateTotal()} RON</h3>
          </div>
        )}

        <div className="container mt-5">
          <h2>Plasează comanda</h2>

          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nume:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                required
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Adresă:
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                required
              />
              {errors.address && (
                <div className="invalid-feedback">{errors.address}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                required
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Telefon:
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                required
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="paymentMethod" className="form-label">
                Metoda de plată:
              </label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className={`form-select ${errors.paymentMethod ? "is-invalid" : ""}`}
              >
                <option value="">Selectează o metodă de plată</option>
                <option value="card">Card bancar</option>
                <option value="cash">Plată cash la livrare</option>
              </select>
              {errors.paymentMethod && (
                <div className="invalid-feedback">{errors.paymentMethod}</div>
              )}
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className={`form-check-input ${errors.termsAccepted ? "is-invalid" : ""}`}
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="terms">
                Accept termenii și condițiile
              </label>
              {errors.termsAccepted && (
                <div className="invalid-feedback">{errors.termsAccepted}</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-success w-100"
              disabled={cart.length === 0}
            >
              Plasează comanda
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;