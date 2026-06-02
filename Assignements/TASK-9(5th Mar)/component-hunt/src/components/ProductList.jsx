import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList() {
  const products = [
    { name: "Laptop", price: 900 },
    { name: "Phone", price: 500 },
    { name: "Headphones", price: 100 },
  ];

  return (
    <div className="container">
      <div className="products">
        {products.map((item, index) => (
          <ProductCard key={index} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
