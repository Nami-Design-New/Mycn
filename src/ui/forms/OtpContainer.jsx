import { useEffect, useState } from "react";

const OtpContainer = ({ setCode }) => {
  const [otpValue, setOtpValue] = useState(Array(6).fill(""));

  useEffect(() => {
    const firstEmpty = otpValue.findIndex((val) => val === "");
    if (firstEmpty !== -1) {
      document.getElementById(`input${firstEmpty}`)?.focus();
    }
  }, [otpValue]);

  useEffect(() => {
    document.getElementById("input0")?.focus();
  }, []);

  const handleInput = (index, event) => {
    const value = event.target.value;
    if (!/^\d?$/.test(value)) return;

    const newOtpValue = [...otpValue];
    newOtpValue[index] = value;
    setOtpValue(newOtpValue);
    setCode(newOtpValue.join(""));

    if (value && index < 5) {
      setTimeout(() => {
        document.getElementById(`input${index + 1}`)?.focus();
      }, 10);
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      if (otpValue[index]) {
        const newOtpValue = [...otpValue];
        newOtpValue[index] = "";
        setOtpValue(newOtpValue);
        setCode(newOtpValue.join(""));
      } else if (index > 0) {
        setTimeout(() => {
          document.getElementById(`input${index - 1}`)?.focus();
        }, 10);
      }
    }
  };

  const handlePaste = (event) => {
    const data = event.clipboardData.getData("Text");
    const numbers = data.replace(/\D/g, "").slice(0, 6);
    const arr = numbers.split("");
    setOtpValue(arr);
    setCode(numbers);

    if (arr.length < 6) {
      setTimeout(() => {
        document.getElementById(`input${arr.length}`)?.focus();
      }, 10);
    }

    event.preventDefault();
  };

  return (
    <div className="otp-container" onPaste={handlePaste}>
      {Array.from({ length: 6 }).map((_, index) => (
        <input
          key={index}
          id={`input${index}`}
          className="otp-input"
          type="text"
          maxLength="1"
          inputMode="numeric"
          pattern="[0-9]"
          value={otpValue[index]}
          onChange={(e) => handleInput(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}
    </div>
  );
};

export default OtpContainer;
