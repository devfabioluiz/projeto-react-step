const Exemplo = ({ dadosFilho }) => {
  const funcao = () => dadosFilho("Dados de Exemplo (Filho)");
  return (
    <div>
      <button onClick={funcao}>Enviar dados para o pai</button>
    </div>
  );
};

export default Exemplo;
