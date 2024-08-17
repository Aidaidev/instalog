import React, { useState } from "react";
import { forgotPassword } from "../../services/auth";

const ForgotPassword: React.FC = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await forgotPassword(username);
      console.log("Password reset email sent", response.data);
    } catch (error) {
      console.error("Forgot password failed", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ForgotPassword;
