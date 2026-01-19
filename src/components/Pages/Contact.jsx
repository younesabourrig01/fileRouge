const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black text-gray-900 mb-2">
          Contactez-nous
        </h1>
      </div>

      <form className="space-y-6 bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Nom Complet
          </label>
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="exemple@shop.ma"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Comment pouvons-nous vous aider ?"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
          ></textarea>
        </div>
        <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-gray-100">
          Envoyer le message
        </button>
      </form>
    </div>
  );
};

export default Contact;
