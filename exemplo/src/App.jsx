import Usuarios from "./components/aula8/Usuarios";
import Posts from "./components/aula8/Posts";
import ListaUsuarios from "./components/aula8/ListaUsuarios";
import PostsAxios from "./components/aula8/PostsAxios";

function App() {
  return (
    <div>
      <h1>JSONPlaceholder App</h1>
      <Usuarios />
      <Posts />
      <ListaUsuarios />
      <PostsAxios />
    </div>
  );
}
export default App;
