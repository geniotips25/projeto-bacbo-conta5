import { useState } from "react";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const loginGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      alert("Login com Google feito!");
    }).catch((error) => {
      console.error(error);
      alert("Erro ao fazer login com Google.");
    });
  };

  const loginEmailSenha = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then(() => alert("Login com e-mail feito!"))
      .catch((error) => {
        console.error(error);
        alert("Erro ao fazer login com e-mail.");
      });
  };

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl mb-4">Login</h1>
      <button onClick={loginGoogle} className="bg-purple-600 p-2 rounded mb-4">Entrar com Google</button>
      <div className="mb-2">ou faça login com seu e-mail</div>
      <input type="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="block p-2 mb-2 w-full text-black" />
      <input type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} className="block p-2 mb-4 w-full text-black" />
      <button onClick={loginEmailSenha} className="bg-purple-600 p-2 rounded">Login</button>
    </div>
  );
}

export default Login;
