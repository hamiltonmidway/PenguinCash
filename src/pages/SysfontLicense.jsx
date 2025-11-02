// src/pages/SysfontLicense.jsx
// License for Alina Sava “Sysfont” used in the Experience 1985 theme

import React from "react";
import { Link } from "react-router-dom";

export default function SysfontLicense() {
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
        Sysfont License Agreement
      </h1>

      <p className="mb-4" style={{ color: "var(--text-color)" }}>
        This license applies to the “Sysfont” typeface by Alina Sava, used in the
        Experience 1985 theme of Penguin Cash.
      </p>

      <p className="mb-6" style={{ color: "var(--text-color)" }}>
        Sysfont is distributed via Fonts Arena and licensed as “Free for personal and commercial use with attribution.”
        The full license text is provided below.
      </p>

      {/* --- License image panel --- */}
      <div className="flex flex-col gap-10">
        <img
          src="/licenses/sysfont-license.png"
          alt="Sysfont License Agreement"
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
