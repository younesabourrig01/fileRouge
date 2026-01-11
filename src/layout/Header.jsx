import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the hover class once to keep the code clean
  const hoverStyle =
    "hover:text-[#1DBB8B] transition-colors duration-300 cursor-pointer";

  return (
    <header className="bg-white shadow-sm border-b  border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex-shrink-0">
          <h2 className="text-xl font-bold">SHOP.MA</h2>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-10 text-sm font-semibold uppercase tracking-wide text-gray-600">
            <li className={hoverStyle}>Accueil</li>
            <li className={hoverStyle}>Produits</li>
            <li className={hoverStyle}>Panier</li>
            <li className={hoverStyle}>Contact</li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 transition-colors ${hoverStyle}`}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white border-t border-gray-100`}
      >
        <ul className="flex flex-col p-4 space-y-4 text-sm font-semibold uppercase text-gray-600">
          <li>
            <a href="#" className={`block py-2 ${hoverStyle}`}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#" className={`block py-2 ${hoverStyle}`}>
              Produits
            </a>
          </li>
          <li>
            <a href="#" className={`block py-2 ${hoverStyle}`}>
              Panier
            </a>
          </li>
          <li>
            <a href="#" className={`block py-2 ${hoverStyle}`}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
