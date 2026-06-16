function Features() {
  const features = [
    {
      title: "Automation",
      desc: "Automate repetitive tasks."
    },
    {
      title: "Analytics",
      desc: "Real-time business insights."
    },
    {
      title: "Security",
      desc: "Enterprise-grade protection."
    }
  ];

  return (
    <section className="features">
      <h2>Why Teams Choose Us</h2>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;