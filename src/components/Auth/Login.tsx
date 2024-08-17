import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate("/profile");
      alert("Успешно!");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="register">
      <div className="register-blok">
        <div className="blok">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Вход</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
