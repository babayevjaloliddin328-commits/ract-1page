import heroLaptop from '../image/windows.png';

function Hero() {
  return (
    <section className="hero container">
      <div className="hero-text">
        <h2>New Laptop</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <button>Shop now</button>
      </div>
      <img src={heroLaptop} alt="Laptop" />
    </section>
  );
}

export default Hero;
