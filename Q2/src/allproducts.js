import React, { useState, useEffect } from 'react';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products here
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      {/* Render products here */}
    </div>
  );
}

export default AllProducts;
