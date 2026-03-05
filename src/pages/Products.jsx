import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';

const getFetchErrorMessage = (error, fallbackMessage) => {
  const rawMessage = (error?.message || '').toLowerCase();
  const isNetworkIssue =
    error?.name === 'TypeError' ||
    rawMessage.includes('failed to fetch') ||
    rawMessage.includes('networkerror');

  if (isNetworkIssue) {
    return "Tarmoq xatosi: internet, CORS yoki server vaqtincha ishlamayapti.";
  }

  return error?.message || fallbackMessage;
};

const emptyForm = {
  title: '',
  price: '',
  description: '',
  brand: ''
};

function Products({ products, setProducts, onUpdate, onDelete }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState(emptyForm);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://dummyjson.com/products?limit=30');
      if (!response.ok) {
        throw new Error('Mahsulotlarni yuklab bo\'lmadi.');
      }

      const data = await response.json();
      setProducts((prev) => {
        const prevIds = new Set(prev.map((item) => item.id));
        const missingProducts = data.products.filter((item) => !prevIds.has(item.id));
        return [...prev, ...missingProducts];
      });
    } catch (err) {
      setError(getFetchErrorMessage(err, 'Mahsulotlarni yuklashda kutilmagan xatolik.'));
    } finally {
      setLoading(false);
    }
  }, [setProducts]);

  useEffect(() => {
    if (products.length < 20) {
      fetchProducts();
    }
  }, [fetchProducts, products.length]);

  useEffect(() => {
    if (location.state?.success) {
      setSuccess(location.state.success);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const handleEditStart = (product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title || '',
      price: product.price || '',
      description: product.description || '',
      brand: product.brand || ''
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    if (!editingProduct) {
      return;
    }

    const { title, price, description, brand } = formData;
    if (!title || !price || !description || !brand) {
      setError('Tahrirlashda hamma maydonlar to\'ldirilishi kerak.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://dummyjson.com/products/${editingProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          price: Number(price),
          description,
          brand
        })
      });

      if (!response.ok) {
        throw new Error('Mahsulotni yangilashda xatolik.');
      }

      const updated = await response.json();
      onUpdate(updated);
      setSuccess('Mahsulot yangilandi.');
      setEditingProduct(null);
      setFormData(emptyForm);
    } catch (err) {
      setError(getFetchErrorMessage(err, 'Mahsulotni yangilashda kutilmagan xatolik.'));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Rostdan ham o\'chirmoqchimisiz?');
    if (!isConfirmed) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Mahsulotni o\'chirishda xatolik.');
      }

      onDelete(id);
      setSuccess('Mahsulot o\'chirildi.');
    } catch (err) {
      setError(getFetchErrorMessage(err, 'Mahsulotni o\'chirishda kutilmagan xatolik.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1>Barcha Mahsulotlar</h1>

      {loading && <p>Yuklanmoqda...</p>}
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      {editingProduct && (
        <div className="edit-box">
          <h3>Mahsulotni tahrirlash</h3>
          <ProductForm
            formData={formData}
            onChange={handleFormChange}
            onSubmit={handleUpdateSubmit}
            submitText={loading ? 'Yangilanmoqda...' : 'Yangilash'}
          />
          <button type="button" onClick={() => setEditingProduct(null)}>
            Bekor qilish
          </button>
        </div>
      )}

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={handleEditStart}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
