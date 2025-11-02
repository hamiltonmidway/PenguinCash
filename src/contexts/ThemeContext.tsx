//ThemeContext.jsx
// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = {
  name: string;
  bg: string;
  text: string;
  accent: string;
  font: string;
  uppercase?: boolean;
  glow?: boolean;
  largeFont?: boolean;
  matte?: boolean;
  glossy?: boolean;
};

const DEFAULT_THEME: Theme = {
  name: "Default",
  bg: "#ffffff",
  text: "#000000",
  accent: "#3b82f6",
  font: "'Inter', sans-serif",
};

const THEME_REGISTRY: Record<string, Theme> = {
  Default: DEFAULT_THEME,

  Midnight: {
    name: "Midnight",
    bg: "#0f172a",
    text: "#f8fafc",
    accent: "#3b82f6",
    font: "'Inter', sans-serif",
  },

  "Arctic Frost": {
    name: "Arctic Frost",
    bg: "#e6f0ff",
    text: "#0f172a",
    accent: "#2b6cb0",
    font: "'Gabarito', sans-serif",
  },

  "Hash Browns": {
    name: "Hash Browns",
    bg: "#F9F6F1",
    text: "#3E2C23",
    accent: "#A47E5E",
    font: "'Coffee', monospace",
    matte: true,
  },

  "Twin Pines Mall": {
    name: "Twin Pines Mall",
    bg: "#0c0c0c",
    text: "#f8fafc",
    accent: "#5C8C5A",
    font: "'US101', monospace",
  },

  "E-Ink": {
    name: "E-Ink",
    bg: "#F4F2EC",
    text: "#333333",
    accent: "#666666",
    font: "'Russo One', sans-serif",
    matte: true,
  },

  "Experience 1983": {
    name: "Experience 1983",
    bg: "#0c0c0c",
    text: "#cde4b0",
    accent: "#4eff00",
    font: "'PrintChar21', monospace", // Apple II font family you registered
    uppercase: true,
  },

  "Experience 1985": {
    name: "Experience 1985",
    bg: "#eaeaea",
    text: "#000000",
    accent: "#0000cc",
    font: "'Sysfont','Geneva',sans-serif",
  },

  // ---- Larger font variants ----
  "Default (Larger Fonts)": {
    name: "Default (Larger Fonts)",
    bg: "#ffffff",
    text: "#000000",
    accent: "#3b82f6",
    font: "'Inter', sans-serif",
    largeFont: true,
  },

  "Midnight (Larger Fonts)": {
    name: "Midnight (Larger Fonts)",
    bg: "#0f172a",
    text: "#f8fafc",
    accent: "#3b82f6",
    font: "'Inter', sans-serif",
    largeFont: true,
  },

  "Arctic Frost (Larger Fonts)": {
    name: "Arctic Frost (Larger Fonts)",
    bg: "#e6f0ff",
    text: "#0f172a",
    accent: "#2b6cb0",
    font: "'Gabarito', sans-serif",
    largeFont: true,
  },

  "Hash Browns (Larger Fonts)": {
    name: "Hash Browns (Larger Fonts)",
    bg: "#F9F6F1",
    text: "#3E2C23",
    accent: "#A47E5E",
    font: "'Coffee', monospace",
    matte: true,
    largeFont: true,
  },

  "Twin Pines Mall (Larger Fonts)": {
    name: "Twin Pines Mall (Larger Fonts)",
    bg: "#0c0c0c",
    text: "#f8fafc",
    accent: "#5C8C5A",
    font: "'US101', monospace",
    largeFont: true,
  },

  "E-Ink (Larger Fonts)": {
    name: "E-Ink (Larger Fonts)",
    bg: "#F4F2EC",
    text: "#333333",
    accent: "#666666",
    font: "'Russo One', sans-serif",
    matte: true,
    largeFont: true,
  },

  "Experience 1983 (Larger Fonts)": {
    name: "Experience 1983 (Larger Fonts)",
    bg: "#0c0c0c",
    text: "#cde4b0",
    accent: "#4eff00",
    font: "'PrintChar21', monospace",
    uppercase: true,
    largeFont: true,
  },

  "Experience 1985 (Larger Fonts)": {
    name: "Experience 1985 (Larger Fonts)",
    bg: "#eaeaea",
    text: "#000000",
    accent: "#0000cc",
    font: "'Sysfont','Geneva',sans-serif",
    largeFont: true,
  },
};

function applyTheme(t: Theme) {
  const root = document.documentElement;
  root.style.setProperty("--bg-color", t.bg);
  root.style.setProperty("--text-color", t.text);
  root.style.setProperty("--accent-color", t.accent);
  root.style.setProperty("--font-family", t.font);
  root.style.setProperty("--text-transform", t.uppercase ? "uppercase" : "none");
  root.style.setProperty("--text-shadow", t.glow ? "0 0 6px var(--accent-color)" : "none");
  root.style.setProperty("--font-size", t.largeFont ? "1.25rem" : "1rem");
  document.body.style.backgroundColor = t.bg;
  document.body.style.fontSize = t.largeFont ? "1.25rem" : "1rem";
}

type ThemeCtx = {
  themeName: string;
  theme: Theme;
  setThemeByName: (name: string) => void;
};

const ThemeContext = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<string>(
    localStorage.getItem("penguin-theme") || "Default"
  );

  const theme = useMemo(
    () => THEME_REGISTRY[themeName] || DEFAULT_THEME,
    [themeName]
  );

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("penguin-theme", themeName);
  }, [theme, themeName]);

  const setThemeByName = (name: string) => setThemeName(name);

  return (
    <ThemeContext.Provider value={{ themeName, theme, setThemeByName }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}