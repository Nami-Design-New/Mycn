import { useState } from "react";

const addressFields = [
  { label: "Recipient Name", value: "Ahmed Elsayed" },
  { label: "Street Address", value: "Building 12, No. 88 Jingdong Road" },
  { label: "District", value: "Baiyun District" },
  { label: "City", value: "Guangzhou" },
  { label: "Province", value: "Guangdong" },
  { label: "Country", value: "China" },
  { label: "Zip Code", value: "510440" },
  { label: "Phone", value: "+86 20 1234 5678" },
  { label: "Email", value: "support@mycn.com" },
];

export default function Address() {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (value, index) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedField(index);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  return (
    <div className="address">
      <div className="row">
        <div className="col-lg-6 col-12 p-2">
          <div className="content">
            <h3>Welcome to MY CN</h3>
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
              {addressFields.map((field, index) => (
                <li key={index}>
                  <span>{field.label}:</span>{" "}
                  <b
                    className="copy-wrapper"
                    onClick={() => handleCopy(field.value, index)}
                  >
                    {field.value}
                    <i className="fa-regular fa-copy copy-icon"></i>
                    <span className="tooltip">
                      {copiedField === index ? "Copied!" : "Copy"}
                    </span>
                  </b>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
