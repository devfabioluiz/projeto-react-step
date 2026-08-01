import ButtonStyled from "./components/aula6/ButtonStyled";
import ButtonCSS from "./components/aula6/ButtonCSS";
import ButtonInline from "./components/aula6/ButtonInline";
import TailwindButton from "./components/aula6/TailwindButton";

function App() {
  return (
    <div>
      <h1>Botão com CSS Externo</h1>
      <ButtonCSS label="CSS Externo" />
      <h1>Botão com Inline Styles</h1>
      <ButtonInline label="Primário" primary />
      <ButtonInline label="Secundário" />
      <h1>Botão com Styled Components</h1>
      <ButtonStyled label="Primário" primary />
      <ButtonStyled label="Secundário" />
      <h1>Botão com Tailwind CSS</h1>
      <TailwindButton label="Botão" />
    </div>
  );
}

export default App;
