import { useState } from "react";
import Step1 from "../components/reset-password/Step1";
import Step2 from "../components/reset-password/Step2";
import Step3 from "../components/reset-password/Step3";

export default function ResetPassword() {
  const [step, setStep] = useState(1);

  return (
    <section className="auth_section main_section mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2 d-flex flex-column justify-content-center">
            {step === 1 && <Step1 setStep={setStep} />}
            {step === 2 && <Step2 setStep={setStep} />}
            {step === 3 && <Step3 setStep={setStep} />}
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
