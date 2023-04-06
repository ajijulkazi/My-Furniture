import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
const Homepage = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div className=""><h2>home</h2></div>
  );
  }
  
  export default Homepage;
