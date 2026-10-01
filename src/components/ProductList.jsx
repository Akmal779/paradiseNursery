import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import Header from "./Header";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2bb0?auto=format&fit=crop&w=700&q=80",
    description: "Hardy, elegant and excellent for improving indoor air."
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Air Purifying",
    price: 22.5,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80",
    description: "A graceful flowering plant with glossy green leaves."
  },
  {
    id: 3,
    name: "Spider Plant",
    category: "Air Purifying",
    price: 16.75,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80",
    description: "Easy-going and perfect for shelves or hanging baskets."
  },
  {
    id: 4,
    name: "Monstera Deliciosa",
    category: "Tropical Favorites",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80",
    description: "Iconic tropical foliage that creates an instant statement."
  },
  {
    id: 5,
    name: "Rubber Plant",
    category: "Tropical Favorites",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=700&q=80",
    description: "Bold, glossy leaves and a sophisticated indoor look."
  },
  {
    id: 6,
    name: "Bird of Paradise",
    category: "Tropical Favorites",
    price: 34.5,
    image: "https://images.unsplash.com/photo-1609151354448-cb7b2b7a3c8c?auto=format&fit=crop&w=700&q=80",
    description: "A dramatic tropical plant for bright indoor spaces."
  },
  {
    id: 7,
    name: "Jade Plant",
    category: "Easy Care",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80",
    description: "A compact succulent that loves bright, sunny spots."
  },
  {
    id: 8,
    name: "ZZ Plant",
    category: "Easy Care",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1632207691144-3f7c8d3d5c2f?auto=format&fit=crop&w=700&q=80",
    description: "Low-maintenance, glossy foliage for busy plant parents."
  },
  {
    id: 9,
    name: "Golden Pothos",
    category: "Easy Care",
    price: 17.5,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80",
    description: "A beautiful trailing vine that grows happily indoors."
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="page">
      <Header />

      <main className="products-page">
        <div className="page-heading">
          <div>
            <span className="eyebrow">Our collection</span>
            <h1>Find your perfect plant</h1>
            <p>Bring nature home with beautiful plants selected for every space.</p>
          </div>
          <div className="plant-count">{products.length} plants</div>
        </div>

        {categories.map((category) => (
          <section className="category-section" key={category}>
            <div className="category-heading">
              <h2>{category}</h2>
              <span>{products.filter((p) => p.category === category).length} varieties</span>
            </div>

            <div className="product-grid">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <article className="product-card" key={product.id}>
                    <div className="product-image-wrap">
                      <img src={product.image} alt={product.name} />
                      <span className="category-pill">{category}</span>
                    </div>

                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>

                      <div className="product-bottom">
                        <span className="price">${product.price.toFixed(2)}</span>
                        <button
                          className={`add-btn ${isInCart(product.id) ? "added" : ""}`}
                          disabled={isInCart(product.id)}
                          onClick={() => dispatch(addToCart(product))}
                        >
                          {isInCart(product.id) ? "Added ✓" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
