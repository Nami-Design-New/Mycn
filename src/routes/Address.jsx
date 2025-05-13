export default function Address() {
  return (
    <div className="address">
      <div className="row">
        <div className="col-lg-6 col-12 p-2">
          <div className="content">
            <h3>Welcome to MY CN </h3>

            <p>
              Your MY CN China locker address is now active! Start shopping from
              any online store in China with ease. Simply use your unique MY CN
              address at checkout and have your packages delivered directly to
              your personal locker.
            </p>

            <p>
              Enjoy <strong>45 days of FREE storage</strong> with no hidden
              fees. We make international shopping simple and cost-effective by
              allowing you to <strong>consolidate multiple packages</strong>{" "}
              into one shipment or request <strong>custom re-packing</strong> to
              reduce size and weight — helping you save BIG on international
              shipping costs.
            </p>
          </div>
        </div>

        <div className="col-lg-6 col-12 p-2">
          <div className="address_card">
            <h4>
              Your China Shipping Address <img src="/images/logo.svg" alt="" />
            </h4>

            <ul>
              <li>
                <span>Recipient Name:</span> Ahmed Elsayed
              </li>
              <li>
                <span>Street Address:</span> Building 12, No. 88 Jingdong Road
              </li>
              <li>
                <span>District:</span> Baiyun District
              </li>
              <li>
                <span>City:</span> Guangzhou
              </li>
              <li>
                <span>Province:</span> Guangdong
              </li>
              <li>
                <span>Country:</span> China
              </li>
              <li>
                <span>Zip Code:</span> 510440
              </li>
              <li>
                <span>Phone:</span> +86 20 1234 5678
              </li>
              <li>
                <span>Email:</span> support@mycn.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
