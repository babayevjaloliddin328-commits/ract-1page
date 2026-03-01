function CategorySection({ categories }) {
  return (
    <section className="container section-gap">
      <div className="section-header">
        <h2>Kataloglar</h2>
        <div className="arrows" aria-hidden="true">
          <button type="button">←</button>
          <button type="button">→</button>
        </div>
      </div>
      <div className="categories-grid">
        {categories.map((category) => (
          <article key={category.name} className={`category-card ${category.active ? 'active' : ''}`}>
            <p className="category-icon">{category.icon}</p>
            <p>{category.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
