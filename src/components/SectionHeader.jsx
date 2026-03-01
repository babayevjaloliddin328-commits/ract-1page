import Countdown from './Countdown';

function SectionHeader({ title, showTimer = false }) {
  return (
    <div className="section-header">
      <div className="section-header-left">
        <h2>{title}</h2>
        {showTimer && <Countdown />}
      </div>
      <div className="arrows" aria-hidden="true">
        <button type="button">←</button>
        <button type="button">→</button>
      </div>
    </div>
  );
}

export default SectionHeader;
