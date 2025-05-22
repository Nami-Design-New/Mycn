import { Form } from "react-bootstrap";
import { Link } from "react-router";
import InputField from "../ui/forms/InputField";
import SelectField from "../ui/forms/SelectField";
import SubmitButton from "../ui/forms/SubmitButton";
import PasswordField from "./../ui/forms/PasswordField";

export default function Register() {
  return (
    <section className="auth_section main_section mt-80">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-2">
            <h3 className="section_title">Create Your My CN Account</h3>
            <p className="section_description">
              Sign up to start managing your shipments, tracking packages, and
              accessing exclusive shipping solutions tailored to your needs.
            </p>
          </div>

          <div className="col-lg-6 col-12 p-2">
            <form className="form_ui">
              <div className="form_group">
                <InputField label="First Name" placeholder="First name" />
                <InputField label="Last Name" placeholder="Last name" />
              </div>

              <div className="form_group">
                <InputField
                  label="Email Address"
                  placeholder="Enter your email"
                />
                <InputField
                  type="tel"
                  label="Whatsapp Number"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form_group">
                <SelectField
                  label={"Country"}
                  defaultSelect={"Select your country"}
                  options={[
                    { name: "United Arab Emirates", value: "ae" },
                    { name: "Saudi Arabia", value: "sa" },
                  ]}
                />
              </div>

              <div className="form_group">
                <PasswordField label="Password" placeholder="Password" />
                <PasswordField
                  label="Confirm Password"
                  placeholder="Confirm password"
                />
              </div>

              <Form.Check
                type="checkbox"
                label={
                  <>
                    I accept the{" "}
                    <Link to="/terms-conditions">terms and conditions</Link>
                    *
                  </>
                }
              />

              <SubmitButton text="Sign Up" />

              <p className="note">
                Already have an account? <Link to="/signin">Sign In</Link>
              </p>
            </form>
          </div>

          <div className="col-lg-6 col-12 p-2 d-lg-block d-none">
            <div className="img">
              <img src="/images/auth.jpg" alt="auth" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
