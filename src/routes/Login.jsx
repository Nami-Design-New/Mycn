import { Link } from "react-router";
import InputField from "../ui/forms/InputField";
import PasswordField from "../ui/forms/PasswordField";
import SubmitButton from "../ui/forms/SubmitButton";

export default function Login() {
  return (
    <section className="auth_section main_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-2">
            <h3 className="section_title">Welcome Back to My CN</h3>
            <p className="section_description">
              Log in to access your dashboard, track shipments, manage packages,
              and enjoy seamless international shipping services.
            </p>
          </div>

          <div className="col-lg-6 col-12 p-2 d-flex align-items-center">
            <form className="form_ui">
              <div className="form_group">
                <InputField
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form_group">
                <PasswordField label="Password" placeholder="Password" />
              </div>

              <Link to="/reset-password" className="link">
                Forget your password?
              </Link>

              <SubmitButton text="Sign In" className="mt-3" />

              <p className="note">
                Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
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
