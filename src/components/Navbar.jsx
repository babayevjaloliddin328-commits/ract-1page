function Navbar() {
  return (
    <div className="navbar-wrap">
      <div className="container navbar">
        <h1 className="brand">BrandLogo</h1>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="/">Bosh sahifa</a>
          <a href="/">Katalog</a>
          <a href="/">Haqimizda</a>
          <a href="/">Aloqa</a>
        </nav>
        <div className="nav-actions">
          <label className="search-box" htmlFor="search-input">
            <input id="search-input" type="text" placeholder="So'zni qidiring" />
            <span>⌕</span>
          </label>
          <button>◉ Aloqaga chiqish</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
