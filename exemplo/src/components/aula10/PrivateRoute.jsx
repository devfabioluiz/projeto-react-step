import { Navigate } from "react-router-dom";

//Crie um arquivo chamado PrivateRoute.jsx
const PrivateRoute = ({ children }) => {
  const isAuthenticated = false; // Simulação de autenticação
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
