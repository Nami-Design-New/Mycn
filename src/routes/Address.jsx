import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useGetSettings from "../hooks/settings/useGetSettings";

export default function Address() {
  const { t } = useTranslation();
  const { data: settings } = useGetSettings();
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (value, index) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedField(index);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const { client } = useSelector((state) => state.clientData);
  const clientName = client?.first_name + " " + client?.last_name;

  const addressFields = [
    { label: t("addressFields.recipient"), value: clientName },
    {
      label: t("addressFields.street"),
      value: settings?.address,
    },
    {
      label: t("addressFields.addressLine2"),
      value: client?.unique_id,
    },
    { label: t("addressFields.district"), value: settings?.district },
    { label: t("addressFields.city"), value: settings?.city },
    { label: t("addressFields.province"), value: settings?.province },
    { label: t("addressFields.country"), value: settings?.country },
    { label: t("addressFields.zipCode"), value: settings?.zip_code },
    { label: t("addressFields.phone"), value: settings?.phone },
    { label: t("addressFields.email"), value: settings?.email },
  ];

  const addressContent = t("profile.address", { returnObjects: true });

  return (
    <div className="address">
      <div className="row">
        <div className="col-lg-6 col-12 p-2">
          <div className="content">
            <h3>{t("profile.welcomeText")}</h3>

            {addressContent.sections.map((section, index) => (
              <p key={index}>{section}</p>
            ))}

            <div className="benefits-section">
              <h4>{addressContent.benefits.heading}</h4>
              <ul>
                {addressContent.benefits.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{addressContent.benefits.footer}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-12 p-2">
          <div className="address_card">
            <h4>
              {addressContent.title}{" "}
              <img src="/images/logo.svg" alt="MYCN Logo" />
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
                      {copiedField === index
                        ? t("common.copied")
                        : t("common.copy")}
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
