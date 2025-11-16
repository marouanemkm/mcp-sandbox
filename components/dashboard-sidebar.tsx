"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, Settings, LogOut, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function DashboardSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-base border-2 border-border bg-background shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay for mobile - backdrop blur */}
      {isOpen && <div className="fixed inset-0 z-40 backdrop-blur-sm bg-overlay md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Desktop Sidebar - Icon Only */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-16 border-r-2 border-border bg-background md:block">
        <div className="flex h-full flex-col items-center py-4">
          {/* Navigation Links */}
          <nav className="flex flex-1 flex-col items-center gap-2">
            <Link
              href="/dashboard"
              className={`group flex h-12 w-12 items-center justify-center rounded-base border-2 border-border shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none ${
                isActive("/dashboard") ? "bg-main text-main-foreground" : "bg-background hover:bg-main hover:text-main-foreground"
              }`}
              title="Dashboard"
            >
              <Home className="h-5 w-5" />
            </Link>
          </nav>

          {/* Bottom Actions */}
          <div className="flex flex-col items-center gap-2">
            <ThemeToggle />

            <Link
              href="/settings"
              className={`flex h-12 w-12 items-center justify-center rounded-base border-2 border-border bg-background shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:bg-main hover:text-main-foreground hover:shadow-none ${
                isActive("/settings") ? "bg-main text-main-foreground" : ""
              }`}
              title="Settings"
            >
              <Settings className="h-5 w-5" />
            </Link>

            <Button
              onClick={() => signOut({ callbackUrl: "/" })}
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-base border-2 border-border bg-background shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:bg-[#FF4D50] hover:text-white hover:shadow-none"
              title="Sign Out"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar - With Text */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 border-r-2 border-border bg-background transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-6">
          {/* Logo/Title */}
          <div className="mb-8 mt-2">
            <h2 className="text-2xl font-heading text-foreground">Menu</h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-1 flex-col gap-3">
            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 rounded-base border-2 border-border p-4 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none ${
                isActive("/dashboard") ? "bg-main text-main-foreground" : "bg-background hover:bg-main hover:text-main-foreground"
              }`}
            >
              <Home className="h-5 w-5" />
              <span className="font-base text-base">Dashboard</span>
            </Link>

            <Link
              href="/settings"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 rounded-base border-2 border-border p-4 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none ${
                isActive("/settings") ? "bg-main text-main-foreground" : "bg-background hover:bg-main hover:text-main-foreground"
              }`}
            >
              <Settings className="h-5 w-5" />
              <span className="font-base text-base">Settings</span>
            </Link>
          </nav>

          {/* Bottom Actions */}
          <div className="flex flex-col gap-3 border-t-2 border-border pt-6">
            <div className="flex items-center justify-between rounded-base border-2 border-border p-4 shadow-shadow">
              <span className="font-base text-sm">Theme</span>
              <ThemeToggle />
            </div>

            <Button
              onClick={() => {
                setIsOpen(false);
                signOut({ callbackUrl: "/" });
              }}
              variant="ghost"
              className="w-full justify-start gap-3 rounded-base border-2 border-border bg-background p-4 shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:bg-[#FF4D50] hover:text-white hover:shadow-none"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-base text-base">Sign Out</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
