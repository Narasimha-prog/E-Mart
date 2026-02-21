🛒 E-Mart – React E-Commerce Application

E-Mart is a modern e-commerce web application built using React.
It allows users to browse products by category, view product details, and manage a shopping cart with quantity control.

🚀 Features

🏪 Multiple product categories (Mobiles, TVs, Books, Furniture, etc.)

📄 Single product detail pages

🛒 Add to Cart functionality

➕ Increase / ➖ Decrease quantity

🗑 Remove items from cart

💰 Dynamic total price calculation

📱 Responsive design

⚛️ Built using React functional components & Context API

📂 Project Structure
src/
│
├── context/
│   └── CartContext.jsx
│
├── singlePages/
│   └── (All single product detail pages)
│
├── stores/
│   ├── components/
│   ├── data/
│   ├── pages/
│   └── UserCart.jsx
│
├── App.jsx
├── main.jsx
└── index.css
🧠 Technologies Used

React

Context API (State Management)

React Router

JavaScript (ES6+)

CSS

🛠 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
2️⃣ Navigate to project folder
cd E-Mart
3️⃣ Install dependencies
npm install
4️⃣ Run development server
npm run dev

OR (if using Create React App)

npm start
🏗 Build for Production
npm run build
🚀 Deploy to GitHub Pages

If using gh-pages:

npm run deploy

This will:

Build the project

Push the production files (dist/ or build/) to gh-pages branch

Deploy automatically

🛒 Cart Functionality

Cart is managed using:

context/CartContext.jsx

Includes:

addItem()

increaseQuantity()

decreaseQuantity()

removeFromCart()

Total price is calculated using:

cartItems.reduce((total, item) => 
  total + item.price * item.quantity, 0)
📸 Categories Available

Mobiles

Computers

TVs

Speakers

Watches

Books

Furniture

Kitchen

AC

Fridges

Men

Women

👨‍💻 Author

Developed by Lakshmi Narasimha Reddy Pittu

📌 Future Improvements

🔐 User Authentication

💳 Payment Integration

🗄 Backend API Integration

📦 Order History

❤️ Wishlist

🔎 Search & Filter