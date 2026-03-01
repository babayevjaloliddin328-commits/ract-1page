function Benefits() {
  const list = [
    {
      icon: '🚚',
      title: 'BEPUL VA TEZ YETKAZIB BERISH',
      text: 'Buyurtmalar uchun bepul yetkazib berish'
    },
    {
      icon: '🎧',
      title: "24/7 MIJOZLARGA XIZMAT KO'RSATISH",
      text: "Doimo 24/7 mijozlarni qo'llab-quvvatlash"
    },
    {
      icon: '✔',
      title: 'PULNI QAYTARIB BERISH KAFOLATI',
      text: 'Bir pullik 30 kun ichida qaytaramiz'
    }
  ];

  return (
    <section className="container benefits section-gap">
      {list.map((item) => (
        <article key={item.title} className="benefit-card">
          <div className="benefit-icon" aria-hidden="true">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </section>
  );
}

export default Benefits;
