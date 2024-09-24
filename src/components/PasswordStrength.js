import React from "react";

const PasswordStrength = ({ password }) => {
  // const passwordStrength = (password) => {
  //   if (password.length === 0 || password.length <= 2) {
  //     return "Weak Password";
  //   } else if (password.length <= 4) {
  //     return "Moderate Password";
  //   } else {
  //     return "Strong Password";
  //   }
  // };

  // const { label } = passwordStrength(password);

  return (
    <div
      className="px-5 py-5"
      style={{
        backgroundColor:
          password.length <= 2
            ? "red"
            : password.length <= 4
            ? "orange"
            : "green",
      }}
      data-testid="passwordStrengthDiv"
    >
      <h4
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        {password.length === 0 || password.length <= 2
          ? "Weak Password"
          : password.length <= 4
          ? "Moderate Password"
          : "Strong Password"}
      </h4>
    </div>
  );
};

export default PasswordStrength;
