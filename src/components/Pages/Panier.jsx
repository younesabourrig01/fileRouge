import { Link } from "react-router-dom";

const Panier = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="mb-6 flex justify-center">
        <div className="bg-emerald-50 p-6 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-emerald-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Votre panier est vide
      </h2>
      <Link
        to="/produits"
        className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100"
      >
        Découvrir nos produits
      </Link>
    </div>
  );
};

export default Panier;
