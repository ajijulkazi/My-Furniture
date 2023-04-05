import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Furniture Business</h1>
      <nav className="flex mb-8">
        <Link to="/products" className="mr-4">
          Products
        </Link>
        <Link to="/booking" className="mr-4">
          Booking
        </Link>
        <Link to="/about" className="mr-4">
          About
        </Link>
        <Link to="/contact" className="mr-4">
          Contact
        </Link>
        </nav>
     </div>
  );
  }
  
  export default Homepage;
