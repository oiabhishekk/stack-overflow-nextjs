"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
type ThemeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};
const ThemeContext = createContext<undefined | ThemeContextType>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<string>("");
  const handleThemeChange = () => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  };

  useEffect(() => {
    setMode("dark");
    handleThemeChange();
  }, [mode]);

  return (
    <>
      {
        <ThemeContext.Provider value={{ mode, setMode }}>
          {children}
        </ThemeContext.Provider>
      }
    </>
  );
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("usTheme must be used within a ThemeProvider");
  } else {
    return context;
  }
}
