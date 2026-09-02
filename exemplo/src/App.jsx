import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      // outros componentes aqui...
    </ThemeProvider>
  );
};

export default App;
