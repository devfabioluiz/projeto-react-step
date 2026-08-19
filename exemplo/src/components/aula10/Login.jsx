import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Esta é a página de login.</h1>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Nome de usuário"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Senha"
      />
      <button onClick={() => navigate("/home")}>Clique para se logar</button>
    </>
  );
};

export default Login;
