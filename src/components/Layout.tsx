// src/components/Layout.tsx
import { ReactNode } from "react";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface LayoutProps { children: ReactNode }

// Top-level: only wraps in the provider and sets defaultOpen=false
export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider defaultOpen={false}>
      <Chrome>{children}</Chrome>
    </SidebarProvider>
  );
}

// Child component lives under the provider, so useSidebar() is safe here
function Chrome({ children }: { children: React.ReactNode }) {
  const { toggleSidebar } = useSidebar();

  return (
    <div
      className="flex min-h-screen w-full"
      // Make the entire app chrome inherit the live theme variables
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
      <AppSidebar />

      <main
        className="flex-1 overflow-auto"
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
          fontFamily: "var(--font-family)",
        }}
      >
        <header
          className="sticky top-0 z-10 flex h-16 items-center gap-4 px-6"
          // Replace bg/background/border utilities with variables
          style={{
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
            borderBottom: "1px solid var(--accent-color)",
            // Keep a subtle separation without glossy effects in matte themes
            boxShadow: "var(--box-shadow, 0 1px 0 rgba(0,0,0,.06))",
          }}
        >
          {/* Custom “Main Menu” button */}
          <button
            onClick={toggleSidebar}
            aria-label="Main menu"
            className="focus:outline-none hover:opacity-80 transition-opacity"
            style={{ color: "var(--text-color)" }}
          >
            <img src="/main-menu.png" alt="" className="h-9 w-auto" />
          </button>

          <img src="/logo.png" alt="Penguin Cash" className="h-12 w-auto ml-2" />
          <h1
            className="ml-2 font-semibold"
            style={{
              fontSize: "calc(var(--font-size) * 1.25)",
              color: "var(--text-color)",
              fontFamily: "var(--font-family)",
              textTransform: "none",
            }}
          >
            Penguin Cash
          </h1>
        </header>

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
