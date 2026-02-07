import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
            Trouvez tout ce que vous
            <span className="text-emerald-600">cherchez</span> en un clic.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
            Bienvenue sur
            <span className="font-bold text-gray-800"> SHOP.MA</span>. Découvrez
            une sélection exclusive de produits de qualité, des dernières
            tendances tech aux incontournables du quotidien. Profitez d'une
            livraison rapide et d'un service client à votre écoute.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/produits"
              className="no-underline px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-gray-200 hover:bg-emerald-600 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              Voir nos produits
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-0 w-1/3 h-full">
        <div className="w-full h-full bg-emerald-50 flex items-center justify-center">
          <svg
            className="w-64 h-64 text-emerald-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
