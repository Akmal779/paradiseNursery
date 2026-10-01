import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Sprout, Heart, Truck } from "lucide-react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-nav">
          <Link to="/" className="brand landing-brand">
            <span className="brand-icon"><Leaf size={22} /></span>
            <span>
              <strong>Paradise</strong>
              <small>Nursery</small>
            </span>
          </Link>
          <Link to="/plants" className="landing-nav-link">Shop Plants <ArrowRight size={17} /></Link>
        </div>

        <div className="hero-content">
          <span className="hero-tag"><Sprout size={16} /> Grow something beautiful</span>
          <h1>Paradise<br /><em>Nursery</em></h1>
          <p>
            Welcome to your little corner of paradise. Discover beautiful
            houseplants that make your home greener, calmer, and happier.
          </p>
          <Link to="/plants" className="hero-btn">
            Get Started <ArrowRight size={20} />
          </Link>

          <div className="hero-features">
            <div><Heart size={19} /><span>Healthy plants</span></div>
            <div><Sprout size={19} /><span>Easy to grow</span></div>
            <div><Truck size={19} /><span>Fresh selection</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Home />
          <AboutUs />
        </>
      } />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
