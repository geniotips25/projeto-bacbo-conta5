import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { app } from "../../firebaseConfig";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      if (usuario) {
        navigate("/bacbo");
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/bacbo");
    } catch {
      setErro("E-mail ou senha inválidos.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/bacbo");
    } catch (err) {
      setErro("Erro ao fazer login com Google.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      {erro && <p className="text-red-500 mb-4">{erro}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          className="w-full border p-2 rounded"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Entrar
        </button>
      </form>

      <div className="text-center my-4">ou</div>

      <button
        onClick={handleGoogleLogin}
        className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
      >
        Entrar com Google
      </button>

      <p className="mt-4 text-sm text-center">
        Ainda não tem conta? <Link to="/register" className="text-blue-500">Cadastre-se</Link>
      </p>
    </div>
  );
}

export default Login;
