const ProductCard = ({ title, price, image, description, rating }) => {
  return (
    <div className="border rounded-lg shadow-sm bg-white flex flex-col h-full overflow-hidden">
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        <span
          className={`absolute top-2 bg-emerald-600 right-2 text-xs px-2 py-1 text-white rounded`}
        >
          {rating}✨
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>

        <p className="text-emerald-700 font-bold mt-3">{price} DH</p>

        <button
          className={`w-full bg-gray-800 text-white hover:bg-gray-700 mt-auto py-2 rounded transition-colors text-sm sm:text-base`}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
