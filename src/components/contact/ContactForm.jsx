import InputField from "../../ui/forms/InputField";

export default function ContactForm() {
  return (
    <div className="row">
      <div className="col-12 p-2 mt-5 mb-3">
        <h4 className="title">Contact Our Expert Team</h4>
        <p className="description">
          Have questions or need guidance? Our experienced professionals are
          here to provide you with solutions.
        </p>
      </div>

      <div className="col-lg-6 col-12 p-2">
        <form className="form_ui d-flex flex-column gap-3">
          <InputField label="Full Name" placeholder="Enter your name" />

          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter your email"
          />

          <InputField label="Subject" placeholder="Enter subject" />

          <InputField
            as="textarea"
            label="Message"
            placeholder="Enter your message"
          />

          <button className="submit_btn mt-2">Send Message</button>
        </form>
      </div>

      <div className="col-lg-6 col-12 p-2">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12936.24050690352!2d104.59188115263468!3d35.84752917824837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x365b0dcf03375849%3A0x5a96fac806f40e1e!2sState%20Grid!5e0!3m2!1sar!2seg!4v1746961369686!5m2!1sar!2seg"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
