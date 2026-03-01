function ProductCard({ product, showRating = false }) {
  const oldPrice = (product.price * 1.2).toFixed(0);

  return (
    <article className="product-card">
      <span className="discount">-{Math.min(36, Math.round(product.price))}%</span>
      <div className="fav-actions" aria-hidden="true">
        <span>♡</span>
        <span>◉</span>
      </div>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price-row">
        <span className="price">${product.price}</span>
        <span className="old-price">${oldPrice}</span>
      </p>
      {showRating && (
        <p className="rating" aria-label={`rating ${product.rating?.rate || 4}`}>
          {'★'.repeat(5)} <span>({product.rating?.count || 55})</span>
        </p>
      )}
      <button>Buyurtma berish</button>
    </article>
  );
}

export default ProductCard;
