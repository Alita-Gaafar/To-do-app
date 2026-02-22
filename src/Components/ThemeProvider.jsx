import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const mood = localStorage.getItem("theme");
  const [theme, setTheme] = useState(mood || "light");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    const newMood = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newMood);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside <ThemeProvider />");
  }
  return ctx;
}
