# Paradise Nursery

A responsive houseplant shopping application built with React, Redux Toolkit, and React Router.

## Features

- Landing page with Paradise Nursery branding and background image
- Company information / About Us section
- Product listing page
- 9 houseplants organized into 3 categories
- Add to Cart functionality
- Add to Cart button becomes disabled after selection
- Dynamic shopping cart quantity in navbar
- Redux Toolkit state management
- Increase and decrease item quantities
- Delete plants from cart
- Total plant count and total price
- Continue Shopping navigation
- Checkout button with Coming Soon message
- Responsive design for desktop, tablet and mobile

## Technologies

- React
- Vite
- Redux Toolkit
- React Redux
- React Router
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
```

## GitHub Pages deployment

Create a public GitHub repository named `paradise-nursery`.

Then run:

```bash
git init
git add .
git commit -m "Paradise Nursery final project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/paradise-nursery.git
git push -u origin main
npm run deploy
```

Replace `YOUR_USERNAME` with your GitHub username.

The source files are intentionally organized so the Coursera evaluator can find:

- `README.md`
- `src/components/AboutUs.jsx`
- `src/App.css`
- `src/App.jsx`
- `src/redux/CartSlice.jsx`
- `src/components/ProductList.jsx`
- `src/components/CartItem.jsx`
