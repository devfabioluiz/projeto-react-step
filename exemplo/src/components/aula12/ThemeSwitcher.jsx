import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <button onClick={toggleTheme}>
        {theme === "light" ? <Sun size={40} /> : <Moon size={40} />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
