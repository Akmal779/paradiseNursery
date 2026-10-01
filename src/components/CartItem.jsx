import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/CartSlice";
import Header from "./Header";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalPlants = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const checkout = () => {
    alert("Coming Soon! Checkout will be available shortly.");
  };

  return (
    <div className="page">
      <Header />

      <main className="cart-page">
        <div className="cart-title">
          <div>
            <span className="eyebrow">Your selection</span>
            <h1>Shopping Cart</h1>
          </div>
          <span className="cart-summary-count">
            {totalPlants} {totalPlants === 1 ? "plant" : "plants"}
          </span>
        </div>

        {items.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-icon"><ShoppingBag size={48} /></div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any plants yet.</p>
            <Link to="/plants" className="primary-btn">Explore Plants</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <section className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <span className="cart-category">{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>Unit price: ${item.price.toFixed(2)}</p>

                    <div className="quantity-controls">
                      <button
                        aria-label={`Decrease ${item.name}`}
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        <Minus size={16} />
                      </button>
                      <strong>{item.quantity}</strong>
                      <button
                        aria-label={`Increase ${item.name}`}
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-total">
                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                    <button
                      className="delete-btn"
                      aria-label={`Delete ${item.name}`}
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <Trash2 size={19} />
                    </button>
                  </div>
                </article>
              ))}

              <Link to="/plants" className="continue-link">
                <ArrowLeft size={18} />
                Continue Shopping
              </Link>
            </section>

            <aside className="order-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Total Plants</span>
                <strong>{totalPlants}</strong>
              </div>
              <div className="summary-row">
                <span>Subtotal</span>
                <strong>${totalAmount.toFixed(2)}</strong>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <strong>Free</strong>
              </div>
              <div className="summary-divider" />
              <div className="summary-total">
                <span>Total</span>
                <strong>${totalAmount.toFixed(2)}</strong>
              </div>
              <button className="checkout-btn" onClick={checkout}>
                Checkout
              </button>
              <p className="secure-text">Secure checkout • Coming Soon</p>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

export default CartItem;
