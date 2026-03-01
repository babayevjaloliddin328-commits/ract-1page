import heroLaptop from '../image/windows.png';

function Intro() {
  return (
    <section className="intro container">
      <div className="intro-content">
        <div className="intro-text">
          <h2>New Laptop</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <button>Shop now</button>
        </div>
        <img src={heroLaptop} alt="Laptop" />
      </div>
      <div className="intro-dots" aria-hidden="true">
        <span className="dot active" />
        <span className="dot" />
        <span className="dot" />
      </div>
    </section>
  );
}

export default Intro;
