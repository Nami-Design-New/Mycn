export default function ShippingCalculator() {
  return (
    <section className="shipping_calculator">
      <div className="container">
        <div className="col-12 p-2">
          <h3 className="section_title">Shipping Cost Calculator</h3>
          <p className="section_description">
            Quickly estimate your shipping fees based on destination, weight,
            and delivery preferences.
          </p>
        </div>

        <div className="col-12 p-2">
          <div className="calculator_form">
            <div className="transportation_type">
              <label htmlFor="air_freight">
                <input
                  type="radio"
                  name="transportation_type"
                  id="air_freight"
                  value="air_freight"
                />

                <span>
                  <i className="fa-regular fa-plane-up"></i> Air Freight
                </span>
              </label>

              <label htmlFor="sea_freight">
                <input
                  type="radio"
                  name="transportation_type"
                  id="sea_freight"
                  value="sea_freight"
                />
                <span>
                  <i className="fa-regular fa-ship"></i> Sea freight
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
