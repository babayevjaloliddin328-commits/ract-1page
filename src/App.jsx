import { useEffect, useState } from 'react';
import './App.css';
import Benefits from './components/Benefits';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import ProductSection from './components/ProductSection';
import PromoSection from './components/PromoSection';

const API_URL = 'https://fakestoreapi.com/products';

const catalogItems = [
  { name: 'Telefon', icon: '📱' },
  { name: 'Kompyuter', icon: '🖥' },
  { name: 'Aqlli soatlar', icon: '⌚' },
  { name: 'Kamera', icon: '📷', active: true },
  { name: 'Quloqchinlar', icon: '🎧' },
  { name: 'Aksessuarlar', icon: '🧩' }
];

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        setIsLoading(true);
        setError('');

        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError("Tovarlarni yuklashda xatolik bo'ldi. Keyinroq urinib ko'ring.");
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();

    return () => controller.abort();
  }, []);

  const discountedProducts = products.slice(0, 5);
  const popularProducts = products.slice(5, 10);
  const allProducts = products.slice(10, 18);

  return (
    <div className="app">
      <Header />
      <main>
        <Intro />

        {isLoading && <p className="status-message">Yuklanmoqda...</p>}
        {error && <p className="status-message error">{error}</p>}

        {!isLoading && !error && (
          <>
            <CategorySection categories={catalogItems} />
            <ProductSection title="Yangi chegirmalar" products={discountedProducts} showTimer />
            <ProductSection title="Ommabop mahsulotlar" products={popularProducts} />
            <PromoSection />
            <ProductSection
              title="Barcha Mahsulotlarimiz"
              products={allProducts}
              showRating
              buttonLabel="Parchasini ko'rish"
            />
            <Benefits />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
