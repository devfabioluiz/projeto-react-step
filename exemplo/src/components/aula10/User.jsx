import { useParams } from "react-router-dom";

//Crie um arquivo chamado User.jsx
const User = () => {
  const { id } = useParams();
  return <h1>Usuário ID: {id}</h1>;
};

export default User;
