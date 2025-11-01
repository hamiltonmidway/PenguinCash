// src/pages/SysfontLicense.jsx
// License for Alina Sava “Sysfont” used in the Experience 1985 theme

import { Link } from "react-router-dom";

export default function SysfontLicense() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sysfont License Agreement</h1>

      <p className="mb-6 text-sm text-muted-foreground">
        This license applies to the “Sysfont” typeface by Alina Sava, used in the Experience 1985 theme of Penguin Cash.
      </p>

      <p className="mb-6 text-sm text-muted-foreground">
        Sysfont is distributed via Fonts Arena and is licensed as “Free for personal and commercial use with attribution.”
        Full license text is provided below.
      </p>

      <div className="flex flex-col gap-10">
        {/* PNG or TXT snapshot of license text */}
        <img
          src="/licenses/sysfont-license.png"
          alt="Sysfont License Agreement"
          className="w-full h-auto rounded-md border border-border shadow-sm bg-muted/30 p-2"
        />

        {/* Back button */}
        <div className="text-center">
          <Link
            to="/about"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
          >
            ← Return to Penguin Cash
          </Link>
        </div>
      </div>
    </div>
  );
}
