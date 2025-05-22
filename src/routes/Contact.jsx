import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import Faqs from "../ui/layout/Faqs";

export default function Contact() {
  return (
    <>
      <section className="contact_section mt-80">
        <div className="container">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <Faqs />
    </>
  );
}
