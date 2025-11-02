// src/pages/KreativeLicense.jsx
// License for Kreative Korp "Apple II" font

// src/pages/KreativeLicense.jsx
// Now fully synchronized with Penguin Cash's theme system.

import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext"; // ✅ Make sure this path matches your actual ThemeContext

export default function KreativeLicense() {
  const { theme } = useTheme();

  // ✅ Sync theme variables on mount or theme change
  React.useEffect(() => {
    if (theme) {
      const root = document.documentElement;
      root.style.setProperty("--bg-color", theme.bg);
      root.style.setProperty("--text-color", theme.text);
      root.style.setProperty("--accent-color", theme.accent);
      root.style.setProperty("--font-family", theme.font);
      root.style.setProperty("--text-transform", theme.textTransform || "none");
      root.style.setProperty("--text-shadow", theme.textShadow || "none");
      root.style.setProperty("--font-size", theme.fontSize || "1rem");
    }
  }, [theme]);

  return (
    <div
      className="min-h-screen p-8 max-w-3xl mx-auto"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        fontFamily: "var(--font-family)",
        textTransform: "var(--text-transform)",
        textShadow: "var(--text-shadow)",
        fontSize: "var(--font-size)",
        transition: "background-color .3s ease, color .3s ease",
      }}
    >
      <h1
        className="text-2xl font-bold mb-4"
        style={{ color: "var(--text-color)" }}
      >
        Kreative Korp License Agreement
      </h1>

      <p className="mb-4" style={{ color: "var(--text-color)" }}>
        This license applies to the “Apple II Font” used in the 1983 theme of Penguin Cash.
      </p>

      <p className="mb-6" style={{ color: "var(--text-color)" }}>
        Thank you to Kreative Korp for licensing the Apple II Font under an inclusive license agreement!
      </p>

      {/* --- License image panel --- */}
      <div className="flex flex-col gap-10">
        <img
          src="/licenses/kreativekorp-license.png"
          alt="Kreative Korp License Agreement"
          className="w-full h-auto rounded-md border shadow-sm p-2"
          style={{
            borderColor: "var(--accent-color)",
            backgroundColor:
              "color-mix(in oklab, var(--bg-color) 85%, var(--text-color))",
          }}
        />

        {/* --- Back button --- */}
        <div className="text-center">
          <Link
            to="/about"
            className="inline-block px-6 py-2 rounded-md transition font-semibold"
            style={{
              backgroundColor: "var(--accent-color)",
              color: "var(--bg-color)",
              fontFamily: "var(--font-family)",
              textTransform: "var(--text-transform)",
            }}
          >
            ← Return to Penguin Cash
          </Link>
        </div>
      </div>
    </div>
  );
}
