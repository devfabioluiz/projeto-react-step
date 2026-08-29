import { useState } from "react";
import axios from "axios";

function Posts() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    // e.preventDefault();  

    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
          userId: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        setResponse(response);
      })
      .catch((err) => {
        console.error("Erro:", err);
      });
  };

  return (
    <div>
      <h1>Criar Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Conteúdo"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>

      {response && (
        <div>
          <h3>Post criado com sucesso!</h3>
          <pre>{JSON.stringify(response.data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Posts;
