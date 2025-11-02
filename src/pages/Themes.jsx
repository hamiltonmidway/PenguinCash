// src/pages/Themes.jsx
// these are the Themes for Penguin Cash
// 12 themes (6 standard + 6 large font) – Accessibility + Full Font Scaling

import { useState, useEffect } from "react";

const THEMES = [
  // 1. Default
  {
    name: "Default",
    bg: "#ffffff",
    text: "#000000",
    accent: "#3b82f6",
    font: "'Inter', sans-serif",
  },
  // 2. Midnight
  {
    name: "Midnight",
    bg: "#0f172a",
    text: "#f8fafc",
    accent: "#3b82f6",
    font: "'Inter', sans-serif",
  },
  // 3. Arctic Frost
  {
    name: "Arctic Frost",
    bg: "#e6f0ff",
    text: "#0f172a",
    accent: "#2b6cb0",
    font: "'Gabarito', sans-serif",
  },
  // 4. Hash Browns
  {
    name: "Hash Browns",
    bg: "#F9F6F1",         // warm off-white paper
    text: "#3E2C23",       // rich coffee brown
    accent: "#A47E5E",     // light latte tone
    font: "'Coffee', monospace",
    matte: true,
  },
  // 5. Twin Pines Mall
  {
    name: "Twin Pines Mall",
    bg: "#0c0c0c",
    text: "#f8fafc",
    accent: "#5C8C5A",
    font: "'US101', monospace",
  },
  // 6. E-Ink
  {
    name: "E-Ink",
    bg: "#F4F2EC",
    text: "#333333",
    accent: "#666666",
    font: "'Russo One', sans-serif",
    matte: true,
  },
  // 7. Experience 1983
  {
    name: "Experience 1983",
    bg: "#0c0c0c",
    text: "#cde4b0",
    accent: "#4eff00",
    font: "'Apple II', monospace",
    uppercase: true,
    glow: false,
  },
  // 8. Experience 1985
{
  name: "Experience 1985",
  bg: "#eaeaea",          // classic Macintosh beige/grey window tone
  text: "#000000",        // pure black text
  accent: "#0000cc",      // saturated blue (old Mac link color)
  font: '"Sysfont", "Geneva", sans-serif',
  largeFont: false
},

  // --- Larger Font Versions ---
  {
    name: "Default (Larger Fonts)",
    bg: "#ffffff",
    text: "#000000",
    accent: "#3b82f6",
    font: "'Inter', sans-serif",
    largeFont: true,
  },
  {
    name: "Midnight (Larger Fonts)",
    bg: "#0f172a",
    text: "#f8fafc",
    accent: "#3b82f6",
    font: "'Inter', sans-serif",
    largeFont: true,
  },
  {
    name: "Arctic Frost (Larger Fonts)",
    bg: "#e6f0ff",
    text: "#0f172a",
    accent: "#2b6cb0",
    font: "'Gabarito', sans-serif",
    largeFont: true,
  },
    {
    name: "Hash Browns (Larger Fonts)",
    bg: "#F9F6F1",         // warm off-white paper
    text: "#3E2C23",       // rich coffee brown
    accent: "#A47E5E",     // light latte tone
    font: "'Coffee', monospace",
    matte: true,
    largeFont: true,
  },
    {
    name: "Twin Pines Mall (Larger Fonts)",
    bg: "#0c0c0c",
    text: "#f8fafc",
    accent: "#5C8C5A",
    font: "'US101', monospace",
    largeFont: true,
  },
  {
    name: "E-Ink (Larger Fonts)",
    bg: "#F4F2EC",
    text: "#333333",
    accent: "#666666",
    font: "'Russo One', sans-serif",
    matte: true,
    largeFont: true,
  },
  {
    name: "Experience 1983 (Larger Fonts)",
    bg: "#0c0c0c",
    text: "#cde4b0",
    accent: "#4eff00",
    font: "'Apple II', monospace",
    uppercase: true,
    glow: false,
    largeFont: true,
  },
  {
    name: "Experience 1985 (Larger Fonts)",
    bg: "#eaeaea",
    text: "#000000",
    accent: "#0000cc",
    font: '"Sysfont", "Geneva", sans-serif',
    largeFont: true
  },
  ];

export default function Themes() {
  const [theme, setTheme] = useState(localStorage.getItem("penguin-theme") || "Default");

useEffect(() => {
  const selected = THEMES.find((t) => t.name === theme);
  if (!selected) return;

  // ① expose normalized theme name to CSS
  const baseName = selected.name.replace(" (Larger Fonts)", "");
  document.documentElement.setAttribute("data-theme", baseName);

  // Base theme colors & fonts
  document.documentElement.style.setProperty("--bg-color", selected.bg);
  document.documentElement.style.setProperty("--text-color", selected.text);
  document.documentElement.style.setProperty("--accent-color", selected.accent);
  document.documentElement.style.setProperty("--font-family", selected.font);

  // Text transform
  document.documentElement.style.setProperty(
    "--text-transform",
    selected.uppercase ? "uppercase" : "none"
  );

  // Text shadow / glow
  document.documentElement.style.setProperty(
    "--text-shadow",
    selected.glow ? "0 0 6px var(--accent-color)" : "none"
  );

  // Matte (E-Ink)
  if (selected.matte) {
    document.documentElement.style.setProperty("--box-shadow", "none");
    document.documentElement.style.setProperty("--transition", "none");
  }

  // Glossy (XP)
  if (selected.glossy) {
    document.documentElement.style.setProperty("--button-gradient", "linear-gradient(#4C8BF5, #0055E5)");
    document.documentElement.style.setProperty("--border-radius", "6px");
  }

  // Font Size (Global)
  const fontSize = selected.largeFont ? "1.25rem" : "1rem";
  document.documentElement.style.setProperty("--font-size", fontSize);
  document.body.style.fontSize = fontSize;           // inherit everywhere
  document.body.style.backgroundColor = selected.bg; // ② force page bg swap

  localStorage.setItem("penguin-theme", theme);
}, [theme]);

  return (
    <div
      className="min-h-screen p-6 transition-colors"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        fontFamily: "var(--font-family)",
        textTransform: "var(--text-transform)",
        textShadow: "var(--text-shadow)",
        fontSize: "var(--font-size)",
      }}
    >
      <h2
        className="font-bold mb-4"
        style={{
          fontSize: "calc(var(--font-size) * 1.5)",
        }}
      >
        Themes
      </h2>

      <p
        className="mb-6"
        style={{
          fontSize: "calc(var(--font-size) * 0.9)",
        }}
      >
        Select your preferred theme for Penguin Cash:
      </p>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {THEMES.map((t) => (
          <div
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={`cursor-pointer rounded-xl p-6 border text-center transition-all ${
              theme === t.name
                ? "ring-2 ring-[var(--accent-color)] scale-[1.02]"
                : "hover:scale-[1.01]"
            }`}
            style={{
              backgroundColor: t.bg,
              color: t.text,
              borderColor: t.accent,
              fontFamily: t.font,
              textTransform: t.uppercase ? "uppercase" : "none",
              textShadow: t.glow ? `0 0 6px ${t.accent}` : "none",
            }}
          >
            <div
              className="font-semibold mb-2"
              style={{
                fontSize: "calc(var(--font-size) * 1)",
              }}
            >
              {t.name}
            </div>
            <div
              className="w-full h-6 rounded"
              style={{ backgroundColor: t.accent }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}