import ProductCard from "../ProductCard/ProductCard";
import Spinner from "react-bootstrap/Spinner";
import useFetch from "../../Hooks/useFetch";
import { useState } from "react";

function ProductsList() {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products",
  );
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = (data || []).filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
      <div className="max-w-xl mx-auto mb-10">
        <div className="relative group">
          <input
            type="text"
            placeholder="Rechercher un produit"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 shadow-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
          />
          <svg
            className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-500 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <p className="text-sm text-gray-500 mt-3 ml-2">
          <span>
            <strong className="text-emerald-600">
              {filteredProducts.length}
            </strong>{" "}
            produits trouvés
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(searchTerm ? filteredProducts : data).map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
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
