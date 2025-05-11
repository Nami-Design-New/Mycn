import { Link } from "react-router";

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: "fa-regular fa-location-dot",
      title: "China Office",
      description: "Find us in Gansu, Dingxi, Anding District, Dingxi.",
      linkText: "Gansu, Dingxi, Anding District, Dingxi",
      linkUrl: "https://maps.app.goo.gl/MUZLHJg29LWAKg7a9",
    },
    {
      icon: "fa-regular fa-phone-volume",
      title: "Call Us",
      description: "Call us to speak to a member of our team.",
      linkText: "+1-800-123-4567",
      linkUrl: "tel:+1-800-123-4567",
    },
    {
      icon: "fa-regular fa-envelope",
      title: "Help & Support",
      description:
        "For help with a current product or service or refer to FAQs and developer tools.",
      linkText: "support@example.com",
      linkUrl: "mailto:support@example.com",
    },
    {
      icon: "fa-regular fa-share-alt",
      title: "Follow us on Social Media",
      description: "Stay connected through our social media channels.",
      subLinks: [
        {
          link: "https://facebook.com/yourpage",
          icon: "fa-brands fa-facebook-f",
        },
        {
          link: "https://twitter.com/yourhandle",
          icon: "fa-brands fa-twitter",
        },
        {
          link: "https://instagram.com/yourprofile",
          icon: "fa-brands fa-instagram",
        },
        {
          link: "https://linkedin.com/yourprofile",
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
                <h6>Follow us</h6>
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
