import { useState } from "react";

function ContadorClick() {
  // contador = valor original/inicial/atual
  // setContador = pega o valor do contador e modifica. Função que atualiza o valor do contador
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(0)}>Resetar</button>
    </div>
  );
}

export default ContadorClick;
