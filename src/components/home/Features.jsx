export default function Features({ features, head }) {
  return (
    <section className="features_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-3">
            <h6 className="section_hint">{head.title}</h6>
            <h3 className="section_title">{head.subtitle}</h3>
          </div>
          {features?.map((feature) => (
            <div className="col-lg-3 col-md-6 col-12 p-2" key={feature.id}>
              <div className="feature_card">
                <div className="icon">
                  <img src={feature.icon} alt="feature" />
                </div>
                <div className="content">
                  <h3 className="title">{feature.title}</h3>
                  <p className="description">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
