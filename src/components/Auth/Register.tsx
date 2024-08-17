import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/auth";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  //   const [photo, setPhoto] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.files && e.target.files.length > 0) {
  //       setPhoto(e.target.files[0]);
  //     }
  //   };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register({
        email,
        password,
        username,
        photo: "https://picsum.photos/200/300",
      });
      navigate("/login");
      alert("Успешно!");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="register">
      <div className="register-blok">
        <div className="blok">
          <form onSubmit={handleSubmit}>
            {/* <input
        type="text"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        required
      /> */}
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="name"
              required
            />
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
            <button type="submit">Регистрация</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
