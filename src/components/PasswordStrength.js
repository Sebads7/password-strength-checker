import React from "react";

const passwordStrength = (password) => {
  let strength = 0;

  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[#$&*_@]/.test(password)) strength++;
  if (password.length >= 8) strength++;

  return strength;
};

const PasswordStrength = ({ password }) => {
  const strength = passwordStrength(password);

  let label, color;

  if (strength <= 2) {
    label = "Weak Password";
    color = "red";
  } else if (strength <= 4) {
    label = "Moderate Password";
    color = "orange";
  } else if (strength === 5) {
    label = "Strong Password";
    color = "green";
  }

  return (
    <div
      className="px-5 py-5"
      style={{
        backgroundColor: color,
      }}
      data-testid="passwordStrengthDiv"
    >
      <h4
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        {label}
      </h4>
    </div>
  );
};

export default PasswordStrength;
