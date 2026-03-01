function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>BrandLogo</h3>
          <p>Biz ijtimoiy tarmoqlarda</p>
          <p className="socials">𝕏  ◌  in  f</p>
        </div>

        <div>
          <h4>Aloqa</h4>
          <p>Manzil: Toshkent sh</p>
          <p>qwerqytu1@gmail.com</p>
          <p>+998901777777</p>
        </div>

        <div>
          <h4>Haqimizda</h4>
          <p>Maxfiylik Siyosati va Shaxsiy Ma'lumotlarni Himoya Qilish</p>
          <p>Mahsulotlarni va to'lovlarni qaytarish siyosati</p>
        </div>

        <div>
          <h4>Savol berish</h4>
          <input type="text" placeholder="Ismingiz" />
          <input type="text" placeholder="Telefon raqam" />
          <input type="text" placeholder="Savol bering..." />
          <button>Yuborish</button>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>"2024 © notebook.uz" MCHJ. Barcha huquqlar himoyalangan</p>
        <p>Hermier: Clean coders group</p>
      </div>
    </footer>
  );
}

export default Footer;
