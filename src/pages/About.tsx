import React from "react";

export default function About() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-gray-200 text-center">
      {/* --- Logo --- */}
      <img
        src="/logo.png"
        alt="Penguin Cash Logo"
        className="w-[380px] h-[380px] mx-auto mb-6 rounded-full shadow-lg"
      />

      {/* --- Title --- */}
      <h1 className="text-3xl font-bold mb-4 text-white">About Penguin Cash</h1>

      {/* --- Intro Paragraphs --- */}
      <div className="text-left">
        <p className="mb-4 text-gray-300">
         This software exists because I was sick and tired of paying a monthly subscription free 
         for spyware-based personal finance software.  I got fed up, and I created Penguin Cash.
        </p>
          <p className="mb-4 text-gray-300">
          <strong>Penguin Cash</strong> is 100% free forever, privacy-focused
          personal finance management software available for PC, Mac, and Linux —
          built for humans who handle their finances offline. Penguin Cash does not and 
          cannot connect to the internet — at all, ever. Your financial data stays 
          100% on your computer and is never uploaded anywhere. 
        </p>
        <p className="mb-4 text-gray-300">
          Penguin Cash has public source code under a “source-available” license —
          you may modify the source code all you want, make whatever changes you want, 
          but you cannot ever sell the software; it must remain free. If you’re interested 
          in changing or studying the source code, it’s available for you here:
        </p>

        <p className="mb-4 text-gray-300 text-center">
          <a
            href="https://github.com/hamiltonmidway/PenguinCash"
            className="text-blue-400 underline hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/hamiltonmidway/PenguinCash
          </a>
        </p>

        <p className="mb-4 text-gray-300">
          Designed with a privacy-first focus and minimalist feel, Penguin Cash is a free way 
          to track spending, view reports, and stay financially informed.  There are no ads,
          no subscriptions, no upsells, no data tracking, no data harvesting, and the source code is available
          to you if you want to make changes to the program.
        </p>

        {/* --- License Info --- */}
        <div className="border-t border-gray-700 my-6 pt-4 text-sm text-gray-400">
          <p className="mb-2">
            <strong>License:</strong> Apache 2.0 + Commons Clause — the source code is
            open for modification for personal use but cannot ever be sold or used commercially.
          </p>
          <p>
            Full license details available at:{" "}
            <a
              href="https://www.apache.org/licenses/LICENSE-2.0"
              className="text-blue-400 underline hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apache 2.0 License
            </a>{" "}
            +{" "}
            <a
              href="https://commonsclause.com/"
              className="text-blue-400 underline hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Commons Clause
            </a>
          </p>
          <p className="mt-4 mb-2 text-gray-400">
  <strong>Apple II Font: </strong>The “1983” theme includes an Apple II font titled "PrintChar21" which was designed by Kreative Korp, and which we’re including here subject to the Kreative Korp license agreement.{" "}
  You can read that license agreement here:{" "}
 <a
  href="/licenses/kreativekorp-license"
  className="text-blue-500 underline"
>
  Kreative Korp License Agreement
</a>
  .  If you'd like to download the Apple II font for yourself, here's the URL:  https://www.kreativekorp.com/software/fonts/apple2/.
</p>
          <p className="mt-4 mb-2 text-gray-400">
  <strong>Apple MacIntosh Font: </strong>The “1985” theme includes an Apple MacIntosh font titled "sysfont" which was designed by Alina Sava, and which we’re including here subject to the FontsArena license agreement.{" "}
  You can read that license agreement here:{" "}
 <a
  href="/licenses/sysfont-license"
  className="text-blue-500 underline"
>
  Fonts Arena // SysFont License Agreement
</a>
  .  If you'd like to download the Apple MacIntosh font for yourself, here's the URL:  https://fontsarena.com/sysfont-by-alina-sava/.
</p>
        </div>

        {/* --- Footer --- */}
        <p className="text-gray-500 italic text-center mt-6">
          Version 1.0 for Linux · Made by Matthew · matthew@penguincash.org
        </p>
        <p className="text-gray-600 italic text-center text-sm">
        Last updated: November 15, 2025
        </p>
      </div>
    </div>
  );
}
