import { useState, useEffect } from "react";

const ExemploPlacarJogo = () => {
  //variáveis de estado (useState)

  // placarCasa e placarVisitante armazenam o valor atual de cada placar
  // mudarPlacarCasa e mudarPlacarVisitante são as funções que atualizam o valor do placar
  // useState(0) inicializa o placar com 0
  const [placarCasa, mudarPlacarCasa] = useState(0);
  const [placarVisitante, mudarPlacarVisitante] = useState(0);
  const [intervalo, mudarIntervalo] = useState(false);
  const [segundos, mudarSegundos] = useState(0);
  const [minutos, mudarMinutos] = useState(0);
  // Use Effect para mostrar o cronômetro do jogo
  // jogo acaba quando o tempo chega a 90 minutos
  // se tiver 59 segundos, adiciona 1 minuto e zera os segundos
  useEffect(() => {
    if (minutos < 105) {
      setInterval(() => {
        mudarSegundos((prev) => {
          if (prev === 59) {
            mudarMinutos((m) => m + 1);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      alert("Fim de jogo");
    }
  }, [minutos]);

  //funções
  const adicionarPontoCasa = () => mudarPlacarCasa((prev) => prev + 1);
  const adicionarPontoVisitante = () =>
    mudarPlacarVisitante((prev) => prev + 1);
  const pausarJogo = () => mudarIntervalo(!intervalo);

  return (
    <div>
      <h1>Cronômetro do Jogo: {minutos + ":" + segundos + ""}</h1>
      <h1>
        Placar: {placarCasa} x {placarVisitante}
      </h1>
      <h2>Casa</h2>
      <button onClick={adicionarPontoCasa}>Gol Casa</button> <br />
      <br />
      <h2>Visitante</h2>
      <button onClick={adicionarPontoVisitante}>Gol Visitante</button> <br />
      <br />
      <button onClick={pausarJogo}>
        {intervalo ? "Pausar jogo" : "Jogar"}
      </button>
    </div>
  );
};

export default ExemploPlacarJogo;
