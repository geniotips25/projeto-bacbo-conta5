// src/pages/Login.tsx
import { useState } from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLoginGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/bacbo');
    } catch (error: any) {
      setErro('Erro no login com Google: ' + error.message);
    }
  };

  const handleLoginEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate('/bacbo');
    } catch (error: any) {
      setErro('Erro ao logar com email: ' + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl mb-6">Entre na sua conta para acessar o sistema</h1>

      <form onSubmit={handleLoginEmail} className="flex flex-col gap-3 w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded text-black"
        />
        <input
          type="password"
          placeholder="Sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="p-2 rounded text-black"
        />
        <button type="submit" className="bg-green-600 p-2 rounded mt-2">Entrar</button>
      </form>

      <button onClick={handleLoginGoogle} className="bg-blue-600 p-2 mt-4 rounded">
        Entrar com Google
      </button>

      {erro && <p className="mt-4 text-red-400">{erro}</p>}
    </div>
  );
};

export default Login;
