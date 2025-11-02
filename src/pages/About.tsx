import React from "react";

export default function About() {
  return (
    <div
      className="p-8 max-w-3xl mx-auto text-center"
      style={{ color: "var(--text-color)" }}
    >
      {/* --- Logo --- */}
      <img
        src="/logo.png"
        alt="Penguin Cash Logo"
        className="w-[380px] h-[380px] mx-auto mb-6 rounded-full shadow-lg"
      />

      {/* --- Title --- */}
      <h1
        className="text-3xl font-bold mb-4"
        style={{ color: "var(--text-color)" }}
      >
        About Penguin Cash
      </h1>

      {/* --- Intro Paragraphs --- */}
      <div className="text-left">
        <p className="mb-4">
          This software exists because I was sick and tired of paying a monthly
          subscription fee for spyware-based personal finance software. I got
          fed up, and I created Penguin Cash.  Why Penguin Cash?  Because I like penguins.
        </p>

        <p className="mb-4">
          <strong>Penguin Cash</strong> is 100% free forever, privacy-focused
          personal finance management software available for PC, Mac, and Linux —
          built for humans who handle their finances offline. Penguin Cash does
          not and cannot connect to the internet — at all, ever. Your financial
          data stays 100% on your computer and is never uploaded anywhere.
        </p>

        <p className="mb-4">
          Penguin Cash has public source code under a “source-available” license
          — you may modify the source code all you want, make whatever changes
          you want, but you cannot ever sell the software; it must remain free.
          If you’re interested in changing or studying the source code, it’s
          available for you here:
        </p>

        <p className="mb-4 text-center">
          <a
            href="https://github.com/hamiltonmidway/PenguinCash"
            className="underline hover:opacity-80"
            style={{ color: "var(--accent-color)" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/hamiltonmidway/PenguinCash
          </a>
        </p>

        <p className="mb-4">
          Designed with a privacy-first focus and minimalist feel, Penguin Cash
          is a free way to track spending, view reports, and stay financially
          informed. There are no ads, no subscriptions, no upsells, no data
          tracking, no data harvesting, and the source code is available to you
          if you want to make changes to the program.
        </p>

        {/* --- License Info --- */}
        <div
          className="border-t my-6 pt-4 text-sm"
          style={{
            borderColor: "var(--accent-color)",
            color: "var(--text-color)",
          }}
        >
          <p className="mb-2">
            <strong>License:</strong> Apache 2.0 + Commons Clause — the source
            code is open for modification for personal use but cannot ever be
            sold or used commercially.
          </p>
          <p>
            Full license details available at:{" "}
            <a
              href="https://www.apache.org/licenses/LICENSE-2.0"
              className="underline hover:opacity-80"
              style={{ color: "var(--accent-color)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apache 2.0 License
            </a>{" "}
            +{" "}
            <a
              href="https://commonsclause.com/"
              className="underline hover:opacity-80"
              style={{ color: "var(--accent-color)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Commons Clause
            </a>
          </p>

          <p className="mt-4 mb-2">
            <strong>Apple II Font:</strong> The “1983” theme includes a great
            Apple II font titled "PrintChar21" which was designed by Kreative
            Korp, and which we’re including here subject to the Kreative Korp
            license agreement. Thank you so much Kreative Korp!  You can read 
            that license agreement here:{" "}
            <a
              href="/licenses/kreativekorp-license"
              className="underline"
              style={{ color: "var(--accent-color)" }}
            >
              Kreative Korp License Agreement
            </a>
            . If you'd like to download the Apple II font for yourself, here's
            the URL:{" "}
            https://www.kreativekorp.com/software/fonts/apple2/.
          </p>

          <p className="mt-4 mb-2">
            <strong>Apple Macintosh Font:</strong> The “1985” theme includes a
            great Apple Macintosh font titled "sysfont" which was designed by
            Alina Sava, and which we’re including here subject to the FontsArena
            license agreement. Thank you so much Alina Sava! You can read that
            license agreement here:{" "}
            <a
              href="/licenses/sysfont-license"
              className="underline"
              style={{ color: "var(--accent-color)" }}
            >
              Fonts Arena // SysFont License Agreement
            </a>
            . If you'd like to download the Apple Macintosh font for yourself,
            here's the URL:{" "}
            https://fontsarena.com/sysfont-by-alina-sava/.
          </p>

          <p className="mt-4 mb-2">
            <strong>Hash Browns Font:</strong> The “Hash Browns” theme includes a
            great font titled "Yagiuhfno2" which was published on All Free
            Download and which we’re including here subject to the Creative
            Commons Attribution license. Thank you so much All Free Download! If
            you'd like to download the "Yagiuhfno2" font for yourself, here's
            the URL:{" "}
            https://all-free-download.com/font/download/yagiuhfno2_6919026.html
          </p>

          <p className="mt-4 mb-2">
            <strong>Twin Pines Mall Font:</strong> The “Twin Pines Mall” theme
            includes a great font titled "US 101" which was published on All
            Free Download and which we’re including here subject to the Creative
            Commons Attribution license. Thank you so much All Free Download! If
            you'd like to download the "US101" font for yourself, here's the
            URL:{" "}
            https://all-free-download.com/font/download/us_101_6918961.html
          </p>
        </div>

        {/* --- Footer --- */}
        <p className="italic text-center mt-6">
          Version 1.0 for Linux · https://www.penguincash.org/ · matthew@penguincash.org
        </p>
        <p className="italic text-center text-sm">
          Last updated: November 15, 2025
        </p>
      </div>
    </div>
  );
}
