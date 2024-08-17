import React, { useState } from "react";
import { resetPassword } from "../../services/auth";

const ResetPassword: React.FC = () => {
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await resetPassword(token, newPassword);
      console.log("Password reset successfully", response.data);
    } catch (error) {
      console.error("Reset password failed", error);
    }
  };

  return (
    <div className="register">
      <div className="register-blok">
        <div className="blok">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Token"
              onChange={(e) => setToken(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button type="submit">Создать</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
