import { useState, useEffect } from 'react';

const useProducts = (URL) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(URL);
    const json = await response.json();
    const data = Object.values(json);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, [URL]);

  return products;
};

export default useProducts;
