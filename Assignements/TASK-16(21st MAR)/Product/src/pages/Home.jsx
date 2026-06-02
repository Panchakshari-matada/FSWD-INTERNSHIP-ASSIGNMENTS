import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFiltered(data);
    });
  }, []);

  const filterProducts = (cat) => {
    setCategory(cat);

    if (cat === "all") {
      setFiltered(products);
    } else {
      const filteredData = products.filter(
        (p) => p.category === cat
      );
      setFiltered(filteredData);
    }
  };

  return (
    <div className="container">
      <h2>Product Store</h2>

      {/* FILTER BUTTONS */}
      <div className="filters">
        <button
          className={category === "all" ? "active" : ""}
          onClick={() => filterProducts("all")}
        >
          All
        </button>

        <button
          className={category === "men's clothing" ? "active" : ""}
          onClick={() => filterProducts("men's clothing")}
        >
          Men
        </button>

        <button
          className={category === "women's clothing" ? "active" : ""}
          onClick={() => filterProducts("women's clothing")}
        >
          Women
        </button>

        <button
          className={category === "electronics" ? "active" : ""}
          onClick={() => filterProducts("electronics")}
        >
          Electronics
        </button>
      </div>

      {/* PRODUCT LIST */}
      <div className="products">
        {filtered.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;