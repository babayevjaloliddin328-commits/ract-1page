import ProductCard from './ProductCard';
import SectionHeader from './SectionHeader';

function ProductSection({
  title,
  products,
  showTimer = false,
  showRating = false,
  buttonLabel = "Barchasini ko'rish"
}) {
  return (
    <section className="container section-gap">
      <SectionHeader title={title} showTimer={showTimer} />
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={`${title}-${product.id}`} product={product} showRating={showRating} />
        ))}
      </div>
      <div className="center-btn">
        <button>{buttonLabel}</button>
      </div>
    </section>
  );
}

export default ProductSection;
