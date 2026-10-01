import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Leaf } from "lucide-react";
import { useSelector } from "react-redux";

function Header() {
  const items = useSelector((state) => state.cart.items);
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon"><Leaf size={22} /></span>
        <span>
          <strong>Paradise</strong>
          <small>Nursery</small>
        </span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>
        <NavLink to="/plants" className={({ isActive }) => isActive ? "active" : ""}>
          Plants
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}>
          Cart
        </NavLink>
      </nav>

      <Link to="/cart" className="cart-link" aria-label="Shopping cart">
        <ShoppingCart size={25} />
        <span className="cart-badge">{cartCount}</span>
      </Link>
    </header>
  );
}

export default Header;
