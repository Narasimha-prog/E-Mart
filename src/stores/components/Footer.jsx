import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">E-Mart</h2>
          <p className="text-sm">
            Your one-stop shop for electronics, fashion, furniture, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
            <li><Link to="/cart" className="hover:text-cyan-400">Cart</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <p>Email: <a href="mailto:lnreddyreddy405@gmail.com" className="hover:text-cyan-400">lnreddyreddy405@gmail.com</a></p>
          <p>Phone: <a href="tel:+917569208701" className="hover:text-cyan-400">+91 7569208701</a></p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} E-Mart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
