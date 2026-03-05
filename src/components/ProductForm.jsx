function ProductForm({ formData, onChange, onSubmit, submitText }) {
  return (
    <form className="product-form" onSubmit={onSubmit}>
      <label htmlFor="title">Nomi</label>
      <input
        id="title"
        name="title"
        type="text"
        value={formData.title}
        onChange={onChange}
      />

      <label htmlFor="price">Narxi</label>
      <input
        id="price"
        name="price"
        type="number"
        value={formData.price}
        onChange={onChange}
      />

      <label htmlFor="description">Tavsif</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={onChange}
      />

      <label htmlFor="brand">Brand</label>
      <input
        id="brand"
        name="brand"
        type="text"
        value={formData.brand}
        onChange={onChange}
      />

      <button type="submit">{submitText}</button>
    </form>
  );
}

export default ProductForm;
