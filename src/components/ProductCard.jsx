const ProductCard = ({ name, price, image, inStock, description }) => {
  return (
    <div className="border rounded-lg shadow-sm bg-white flex flex-col h-full overflow-hidden">
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <img src={image} alt={name} className="w-full h-full object-cover" />

        <span
          className={`absolute top-2 right-2 text-xs px-2 py-1 text-white rounded
            ${inStock ? "bg-emerald-500" : "bg-red-500"}
          `}
        >
          {inStock ? "En Stock" : "Rupture"}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
          {name}
        </h3>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>

        <p className="text-emerald-700 font-bold mt-3">{price} DH</p>

        <button
          className={`w-full mt-auto py-2 rounded transition-colors text-sm sm:text-base
            ${
              inStock
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }
          `}
          disabled={!inStock}
        >
          {inStock ? "Ajouter au panier" : "Indisponible"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
