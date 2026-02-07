import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, title, price, image, description, rating }) => {
  const navigate = useNavigate();

  return (
    <div className="group border border-gray-100 rounded-2xl bg-white flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-emerald-100">
      <div className="relative w-full bg-gray-50 flex items-center justify-center p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-h-64 object-contain transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/80 backdrop-blur-md px-2 py-1 rounded-full shadow-sm border border-gray-100">
          <span className="text-xs font-bold text-gray-800">{rating}</span>
          <span className="text-yellow-500 text-[10px]">★</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-1">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight">
            {title}
          </h3>
        </div>

        <p className="text-sm text-gray-500 line-clamp-2 mt-2 mb-6">
          {description}
        </p>

        <div className="mt-auto flex flex-col gap-4">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black text-gray-900">{price}</span>
            <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">
              DH
            </span>
          </div>

          <button
            onClick={() => navigate(`/produit/${id}`)}
            className="w-full flex items-center justify-center py-4 bg-[#059669] hover:bg-[#047857] text-white rounded-2xl font-bold transition-all active:scale-[0.98] shadow-lg shadow-emerald-100"
          >
            Plus d'information
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
