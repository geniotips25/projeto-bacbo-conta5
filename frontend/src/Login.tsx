// frontend/src/Login.tsx
import React from "react";
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/bacbo"); // redireciona após login
    } catch (error) {
      console.error("Erro ao entrar com Google", error);
      alert("Erro ao entrar com Google");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Entrar com Google</button>
    </div>
  );
};

export default Login;
