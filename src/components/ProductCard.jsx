function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />
      <h3>{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <p className="product-brand">Brand: {product.brand || 'No brand'}</p>

      <div className="card-actions">
        <button type="button" onClick={() => onEdit(product)}>
          Tahrirlash
        </button>
        <button type="button" className="danger" onClick={() => onDelete(product.id)}>
          O'chirish
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
