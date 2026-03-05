import { Link } from 'react-router-dom';

function Admin({ products }) {
  const totalProducts = products.length;
  const totalValue = products.reduce((sum, item) => sum + Number(item.price || 0), 0);
  const averagePrice = totalProducts ? Math.round(totalValue / totalProducts) : 0;
  const expensiveCount = products.filter((item) => Number(item.price || 0) >= 500).length;

  return (
    <section>
      <h1>Admin Panel</h1>
      <p>Bu oddiy boshqaruv paneli. Mahsulotlar bo'yicha qisqa statistika shu yerda.</p>

      <div className="admin-grid">
        <article className="admin-card">
          <h3>Jami Mahsulotlar</h3>
          <p>{totalProducts}</p>
        </article>

        <article className="admin-card">
          <h3>Umumiy Narx</h3>
          <p>${totalValue}</p>
        </article>

        <article className="admin-card">
          <h3>O'rtacha Narx</h3>
          <p>${averagePrice}</p>
        </article>

        <article className="admin-card">
          <h3>$500+ Mahsulot</h3>
          <p>{expensiveCount}</p>
        </article>
      </div>

      <div className="admin-actions">
        <Link to="/products" className="admin-link">
          Mahsulotlar ro'yxati
        </Link>
        <Link to="/products/create" className="admin-link">
          Yangi mahsulot qo'shish
        </Link>
      </div>
    </section>
  );
}

export default Admin;
