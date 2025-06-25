import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import useGetSettings from "../../hooks/settings/useGetSettings";

export default function ContactInfo() {
  const { t } = useTranslation();
  const { data: settings } = useGetSettings();

  const contactInfo = [
    {
      icon: "fa-regular fa-location-dot",
      title: t("contact.chinaOffice"),
      description: t("contact.findUs") + settings?.address,
      linkText: settings?.address,
      linkUrl: `https://www.google.com/maps?q=${settings?.latitude},${settings?.longitude}`,
    },
    {
      icon: "fa-regular fa-phone-volume",
      title: t("contact.callUs"),
      description: t("contact.callUsText"),
      linkText: settings?.phone,
      linkUrl: `tel:${settings?.phone}`,
    },
    {
      icon: "fa-regular fa-envelope",
      title: t("contact.helpSupport"),
      description: t("contact.helpSupportText"),
      linkText: settings?.email,
      linkUrl: `mailto:${settings?.email}`,
    },
    {
      icon: "fa-regular fa-share-alt",
      title: t("contact.followUsOn"),
      description: t("contact.followUsText"),
      subLinks: [
        {
          link: settings?.facebook,
          icon: "fa-brands fa-facebook-f",
        },
        {
          link: settings?.twitter,
          icon: "fa-brands fa-twitter",
        },
        {
          link: settings?.instagram,
          icon: "fa-brands fa-instagram",
        },
        {
          link: settings?.linkedin,
          icon: "fa-brands fa-linkedin-in",
        },
      ],
    },
  ];

  return (
    <div className="row">
      {contactInfo.map((item, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-12 p-2">
          <div className="contact_info">
            <div className="icon">
              <i className={item.icon}></i>
            </div>
            <h6>{item.title}</h6>
            <p>{item.description}</p>
            <Link to={item.linkUrl}>{item.linkText}</Link>

            {item.subLinks && (
              <div className="social-media">
                <h6>{t("contact.followUs")}</h6>
                {item.subLinks && (
                  <div className="social-media-links">
                    {item.subLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <i className={link.icon}></i>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
