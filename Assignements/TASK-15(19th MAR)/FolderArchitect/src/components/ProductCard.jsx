function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt="" width="100" />

      <h3>{product.title}</h3>

      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;
