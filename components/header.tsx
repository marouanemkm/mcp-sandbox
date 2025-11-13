"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Bot, LogIn, LogOut, Settings } from "lucide-react";

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-3 sm:h-16 sm:px-4">
        <Link href="/" className="flex items-center gap-1.5 transition-transform hover:scale-105 sm:gap-2">
          <div className="rounded-base border-2 border-border bg-main p-1.5 shadow-shadow sm:p-2">
            <Bot className="h-4 w-4 text-main-foreground sm:h-5 sm:w-5" />
          </div>
          <span className="text-lg font-heading text-foreground sm:text-xl">MCP Sandbox</span>
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          {session ? (
            <>
              <Button asChild size="default" variant="outline" className="text-sm sm:text-base">
                <Link href="/settings">
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">Settings</span>
                </Link>
              </Button>
              <Button onClick={() => signOut({ callbackUrl: "/" })} size="default" variant="destructive" className="text-sm sm:text-base">
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </Button>
            </>
          ) : (
            <Button asChild size="default" className="text-sm sm:text-base">
              <Link href="/auth/signin">
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Sign In</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
