const Exemplo = () => {
  let lista = [1, 2, 3];

  return (
    <ul>
      {lista
        .filter((valor) => valor % 2 === 0)

        .map((valor) => (
          <li key={valor}>{valor}</li>
        ))}
    </ul>
  );
};

export default Exemplo;
