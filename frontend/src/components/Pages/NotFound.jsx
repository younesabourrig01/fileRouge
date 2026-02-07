import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-black text-emerald-50/50 absolute z-0 select-none">
        404
      </h1>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Oups ! Page introuvable
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-600 transition-all inline-flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
