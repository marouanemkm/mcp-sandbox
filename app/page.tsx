"use client";

import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, User, Mail, Shield, Sparkles, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-size-[40px_40px]">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-base border-2 border-border bg-main p-4 shadow-shadow">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-main-foreground border-t-transparent" />
            </div>
            <p className="text-lg font-heading text-foreground">Chargement...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!session) {
    router.push("/auth/signin");
    return null;
  }

  return (
    <div className="min-h-screen bg-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-size-[40px_40px] p-4 sm:p-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-base border-2 border-border bg-main p-3 shadow-shadow">
              <Shield className="h-6 w-6 text-main-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-heading text-foreground">Dashboard</h1>
              <p className="text-sm font-base text-foreground/70">Espace authentifié</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button onClick={() => signOut({ callbackUrl: "/auth/signin" })} variant="destructive" size="default">
              <LogOut className="h-4 w-4" />
              Déconnexion
            </Button>
          </div>
        </header>

        {/* Welcome Section */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="mb-2 flex items-center gap-2 text-3xl">
                    <Sparkles className="h-8 w-8 text-main" />
                    Bienvenue de retour!
                  </CardTitle>
                  <CardDescription className="text-base">
                    Vous êtes connecté en tant que <span className="font-heading text-main">{session.user.name || session.user.email}</span>
                  </CardDescription>
                </div>
                <div className="rounded-base border-2 border-border bg-main p-4 shadow-shadow">
                  <User className="h-12 w-12 text-main-foreground" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow">
                  <div className="mb-2 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-main" />
                    <p className="text-sm font-heading uppercase tracking-wide text-foreground/70">Email</p>
                  </div>
                  <p className="font-base text-lg text-foreground">{session.user.email}</p>
                </div>
                <div className="rounded-base border-2 border-border bg-secondary-background p-4 shadow-shadow">
                  <div className="mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-main" />
                    <p className="text-sm font-heading uppercase tracking-wide text-foreground/70">User ID</p>
                  </div>
                  <p className="font-mono text-lg font-base text-foreground">{session.user.id}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Info Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-3 inline-flex rounded-base border-2 border-border bg-main p-3 shadow-shadow">
                <Shield className="h-6 w-6 text-main-foreground" />
              </div>
              <CardTitle className="text-xl">NextAuth.js</CardTitle>
              <CardDescription>Authentification sécurisée avec le provider Credentials</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-3 inline-flex rounded-base border-2 border-border bg-[#FACC00] p-3 shadow-shadow">
                <Sparkles className="h-6 w-6 text-black" />
              </div>
              <CardTitle className="text-xl">Neobrutalism</CardTitle>
              <CardDescription>Design moderne avec des bordures épaisses et des ombres audacieuses</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-3 inline-flex rounded-base border-2 border-border bg-[#7A83FF] p-3 shadow-shadow">
                <Image src="/next.svg" alt="Next.js" width={24} height={24} className="invert" />
              </div>
              <CardTitle className="text-xl">Next.js 16</CardTitle>
              <CardDescription>Framework React avec App Router et Server Components</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <a href="https://next-auth.js.org/" target="_blank" rel="noopener noreferrer">
              NextAuth Docs
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="https://www.neobrutalism.dev/" target="_blank" rel="noopener noreferrer">
              Neobrutalism
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
              Next.js Docs
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
