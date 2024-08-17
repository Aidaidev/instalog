import React, { useEffect, useState } from "react";
import axios from "axios";
import ResetPassword from "./ResetPass";
import { Navigate, useNavigate } from "react-router";

const API_URL = "https://api-instagram.elcho.dev/api/v1";

interface User {
  id: string;
  username: string;
  role: string;
  email: string;
  isActive: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleReset = () => {
    navigate("/reset-password");
  };

  const fetchData = () => {
    // Предположим, что токен хранится в localStorage
    const token = localStorage.getItem("accessToken");

    if (token) {
      axios
        .get(`${API_URL}/auth/user`, {
          headers: {
            Authorization: ` Bearer ${token}`,
          },
        })

        .then((response) => {
          setUser(response.data);
        })

        .catch((error) => {
          setError("Failed to fetch user data");
          console.error("Error fetching user data", error);
        });
    } else {
      setError("No token found");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user">
      <div className="user-blok">
        <h1>Профиль</h1>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <button onClick={handleReset}>Сбросить пароль</button>
      </div>
    </div>
  );
};

export default Profile;
