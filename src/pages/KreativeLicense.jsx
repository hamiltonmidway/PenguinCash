// src/pages/KreativeLicense.jsx
// License for Kreative Korp "Apple II" font

// src/pages/KreativeLicense.jsx
// Viewer for Kreative Korp "Apple II" font license

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function KreativeLicense() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Kreative Korp License Agreement</h1>

      <p className="mb-6 text-sm text-muted-foreground">
        This license applies to the “Apple II Font” used in the 1983 theme of Penguin Cash.
      </p>
      <p className="mb-6 text-sm text-muted-foreground">
        Thank you to Kreative Korp for licensing the Apple II Font under an inclusive license agreement!
      </p>
      <div className="flex flex-col gap-10">
        {/* PNG image of the license */}
          <img
            src="/licenses/kreativekorp-license.png"
            alt="Kreative Korp License Agreement"
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
    </div> // Closing the main <div>
  ); // Closing the return statement parenthesis
} // Closing the function body. The file should end here!