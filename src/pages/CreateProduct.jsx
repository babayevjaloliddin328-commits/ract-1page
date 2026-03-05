import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const initialForm = {
  title: '',
  price: '',
  description: '',
  brand: ''
};

function CreateProduct({ onCreate }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setFormData(initialForm);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, price, description, brand } = formData;
    if (!title || !price || !description || !brand) {
      setError('Barcha maydonlarni to\'ldiring.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          price: Number(price),
          description,
          brand,
          thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
        })
      });

      if (!response.ok) {
        throw new Error('Mahsulot qo\'shishda xatolik yuz berdi.');
      }

      const createdProduct = await response.json();
      onCreate(createdProduct);
      navigate('/products', {
        state: { success: 'Mahsulot muvaffaqiyatli qo\'shildi.' }
      });
    } catch (err) {
      setError(getFetchErrorMessage(err, 'Mahsulot qo\'shishda kutilmagan xatolik.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1>Yangi Mahsulot Qo'shish</h1>
      {error && <p className="error">{error}</p>}

      <ProductForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        submitText={loading ? 'Saqlanmoqda...' : 'Saqlash'}
      />
    </section>
  );
}

export default CreateProduct;
