import PasswordStrength from "./PasswordStrength";
import { useState } from "react";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="layout-column align-items-center justify-content-center py-40 mt-100">
      <div className="card w-50 px-75 py-30">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Enter Your Password</h2>
          <div className="layout-column mb-10">
            <input
              type={showPassword ? "text" : "password"}
              id="name"
              placeholder="Enter Password"
              data-testid="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <div className="py-10" data-testid="buttonDiv">
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
          <button onClick={() => setPassword("")}>Clear Password</button>
        </div>
      </div>
      <div className="w-50 py-20">
        <PasswordStrength password={password} />
      </div>
    </div>
  );
};

export default PasswordChecker;
