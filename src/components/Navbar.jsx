import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Product CRUD</h2>

      <div className="nav-links">
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
          Products
        </NavLink>
        <NavLink to="/products/create" className={({ isActive }) => (isActive ? 'active' : '')}>
          Yangi Qo'shish
        </NavLink>
        <NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : '')}>
          Admin
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
