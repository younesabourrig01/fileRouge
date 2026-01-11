import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Spinner from "react-bootstrap/Spinner";

function ProductsList() {
  const API_URL = import.meta.env.VITE_FAKEDATAAPI_KEY;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);

        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px] w-full">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }
  if (error)
    return <p className="text-red-500 text-center py-10">Erreur: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            title={p.title}
            price={p.price}
            description={p.description}
            category={p.category}
            image={p.image}
            rating={p.rating.rate}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
