import useSpecialHandle from "./../hooks/settings/useSpecialHandle";

export default function Restricted() {
  const { data: special } = useSpecialHandle();

  return (
    <>
      <section className="restricted main_section mt-80">
        <div className="container">
          <div className="restricted__header">
            <h3 className="section_title">
              {special?.mainSpecialHandlingPage?.title}
            </h3>
            <p className="section_description">
              {special?.mainSpecialHandlingPage?.subtitle}
            </p>
          </div>

          <div className="row">
            {special?.specialHandlingFeatures?.map((item, index) => (
              <div className="col-lg-4 col-12 p-2" key={index}>
                <div className="restricted__item">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="restricted__image"
                  />
                  <div className="restricted__text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="restricted__benefits">
          <h4>{special?.mainSpecialHandlingPage?.title2}</h4>
          <div
            dangerouslySetInnerHTML={{
              __html: special?.mainSpecialHandlingPage?.description,
            }}
          ></div>
        </div>

        <div className="restricted__note">
          {special?.mainSpecialHandlingPage?.note}
        </div>
      </section>
    </>
  );
}
