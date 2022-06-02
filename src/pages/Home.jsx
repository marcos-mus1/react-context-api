import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import { CartState } from "../context/Context";
import "./styles.css";
const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} className="products" />
        ))}
      </div>
    </div>
  );
};

export default Home;
