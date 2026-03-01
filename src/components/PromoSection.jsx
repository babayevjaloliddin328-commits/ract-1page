import psImg from '../image/ps.png';
import womenImg from '../image/women.jpg';
import speakerImg from '../image/speaker.png';
import perfumeImg from '../image/gucci.png';

function PromoSection() {
  return (
    <section className="container section-gap">
      <h2 className="promo-title">Yangi mahsulotlar</h2>
      <div className="promo-grid">
        <article className="promo-card tall">
          <img src={psImg} alt="Playstation" />
          <div className="promo-text">
            <h3>PlayStation 5</h3>
            <p>Black and white version of the PS5 coming out on sale.</p>
            <a href="/">Shop Now</a>
          </div>
        </article>

        <article className="promo-card wide">
          <img src={womenImg} alt="Women collection" />
          <div className="promo-text">
            <h3>Women's Collections</h3>
            <p>Featured woman collections that give you another vibe.</p>
            <a href="/">Shop Now</a>
          </div>
        </article>

        <article className="promo-card">
          <img src={speakerImg} alt="Speakers" />
          <div className="promo-text">
            <h3>Speakers</h3>
            <p>Amazon wireless speakers.</p>
            <a href="/">Shop Now</a>
          </div>
        </article>

        <article className="promo-card">
          <img src={perfumeImg} alt="Perfume" />
          <div className="promo-text">
            <h3>Perfume</h3>
            <p>Gucci intense oud edition.</p>
            <a href="/">Shop Now</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default PromoSection;
