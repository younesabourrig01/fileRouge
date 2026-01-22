import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyField = Object.values(formData).some(
      (value) => value.trim() === "",
    );

    if (hasEmptyField) {
      alert("Remplire tout les champes");
      return;
    }

    setResult("Sending...");

    // Web3Forms
    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "575e3bd3-3353-4ef0-b698-e90a605d9304");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult("Error");
      }
    } catch (error) {
      setResult("Something went wrong");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black text-gray-900 mb-2">
          Contactez-nous
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white border border-gray-100 p-8 rounded-3xl shadow-sm"
      >
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Nom Complet
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Comment pouvons-nous vous aider ?"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-gray-100"
        >
          Envoyer le message
        </button>

        {result && (
          <p className="text-center text-sm font-semibold text-gray-700">
            {result}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
