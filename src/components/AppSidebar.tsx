// AppSidebar.tsx
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Receipt,
  PieChart,
  CreditCard,
  RefreshCw,
  Wallet,
  Palette,
  Info,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Transactions", url: "/transactions", icon: Receipt },
  { title: "Reports", url: "/reports", icon: PieChart },
  { title: "Categories", url: "/categories", icon: Wallet },
  { title: "Merchants", url: "/merchants", icon: CreditCard },
  { title: "Recurring Bills", url: "/bills", icon: RefreshCw },
  { title: "Themes", url: "/themes", icon: Palette },
  { title: "About This Software", url: "/about", icon: Info },
];

export function AppSidebar() {
  return (
    <Sidebar
      // Bind shadcn sidebar tokens to your global theme variables
      style={{
        // global inheritance
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        fontFamily: "var(--font-family)",
        textTransform: "var(--text-transform)",
        textShadow: "var(--text-shadow)",
        fontSize: "var(--font-size)",
        transition: "background-color .3s ease, color .3s ease",

        // SHADCN SIDEBAR TOKENS → map to your globals
        // (these are what shadcn/ui uses internally for the sidebar)
        ["--sidebar-background" as any]: "var(--bg-color)",
        ["--sidebar-foreground" as any]: "var(--text-color)",
        ["--sidebar-accent" as any]: "var(--accent-color)",
        ["--sidebar-accent-foreground" as any]: "var(--bg-color)",
        ["--sidebar-primary" as any]: "var(--accent-color)",
        ["--sidebar-primary-foreground" as any]: "var(--bg-color)",
        ["--sidebar-border" as any]: "var(--accent-color)",
        ["--sidebar-ring" as any]: "var(--accent-color)",
        // optional muted tones derived from your palette
        ["--sidebar-muted" as any]:
          "color-mix(in oklab, var(--text-color) 10%, var(--bg-color))",
        ["--sidebar-muted-foreground" as any]:
          "color-mix(in oklab, var(--text-color) 70%, var(--bg-color))",
      } as React.CSSProperties}
    >
      <SidebarContent
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
          borderRight: "1px solid var(--accent-color)",
        }}
      >
        <SidebarGroup>
          <SidebarGroupLabel
            style={{ color: "var(--accent-color)", fontWeight: 600 }}
          >
            Finance
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-2 rounded-md transition-all ${
                          isActive ? "font-semibold" : "hover:opacity-80"
                        }`
                      }
                      style={({ isActive }): React.CSSProperties => ({
                        backgroundColor: isActive
                          ? "var(--accent-color)"
                          : "transparent",
                        color: isActive
                          ? "var(--bg-color)"
                          : "var(--text-color)",
                        fontFamily: "var(--font-family)",
                        textTransform: "var(--text-transform)",
                        fontSize: "calc(var(--font-size) * 0.95)",
                      })}
                    >
                      {/* Icon inherits currentColor from NavLink */}
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}