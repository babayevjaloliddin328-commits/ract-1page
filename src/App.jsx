import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import CreateProduct from './pages/CreateProduct';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  const addProductToList = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  const updateProductInList = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === updatedProduct.id ? { ...item, ...updatedProduct } : item))
    );
  };

  const deleteProductFromList = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/admin" replace />} />
          <Route
            path="/products"
            element={
              <Products
                products={products}
                setProducts={setProducts}
                onUpdate={updateProductInList}
                onDelete={deleteProductFromList}
              />
            }
          />
          <Route
            path="/products/create"
            element={<CreateProduct onCreate={addProductToList} />}
          />
          <Route path="/admin" element={<Admin products={products} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
