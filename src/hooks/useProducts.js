import { useState, useEffect } from 'react';

const useProducts = (URL) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const getProducts = async () => {
      setLoading(true);
      try {
        setError(null);
        const response = await fetch(URL);
        const json = await response.json();
        const data = Object.values(json);
        if (!ignore) setProducts(data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    getProducts();
    return () => {
      ignore = true;
    };
  }, [URL]);

  return { products, loading, error };
};

export default useProducts;
