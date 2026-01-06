import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import { products } from "../data/Products";

function Index() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              inStock={product.inStock}
              description={product.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Index;
