import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section>
      <h1>404 - Sahifa topilmadi</h1>
      <p>Bunday sahifa mavjud emas.</p>
      <Link to="/">Bosh sahifaga qaytish</Link>
    </section>
  );
}

export default NotFound;
