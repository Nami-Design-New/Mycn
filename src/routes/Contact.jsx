import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import Faqs from "../components/home/Faqs";

export default function Contact() {
  return (
    <>
      <section className="contact_section">
        <div className="container">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <Faqs />
    </>
  );
}
