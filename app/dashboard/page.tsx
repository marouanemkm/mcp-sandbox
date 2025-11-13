"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Shield, Sparkles, Bot } from "lucide-react";
import { Header } from "@/components/header";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "loading" && !session) {
      router.push("/auth/signin");
    }
  }, [status, session, router]);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-base border-2 border-border bg-main p-4 shadow-shadow">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-main-foreground border-t-transparent" />
            </div>
            <p className="text-lg font-heading text-foreground">Loading...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-4 sm:p-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <div className="rounded-base border-2 border-border bg-main p-3 shadow-shadow">
                <Shield className="h-6 w-6 text-main-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-heading text-foreground">Dashboard</h1>
                <p className="text-sm font-base text-foreground/70">Manage your AI agents</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="mb-2 flex items-center gap-2 text-3xl">
                      <Sparkles className="h-8 w-8 text-main" />
                      Welcome back!
                    </CardTitle>
                    <CardDescription className="text-base">
                      Logged in as <span className="font-heading text-main">{session.user.name || session.user.email}</span>
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-3 inline-flex rounded-base border-2 border-border bg-main p-3 shadow-shadow">
                  <Bot className="h-6 w-6 text-main-foreground" />
                </div>
                <CardTitle className="text-xl">AI Agents</CardTitle>
                <CardDescription>Create and manage your AI agents with custom configurations</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg">
                  <Bot className="h-4 w-4" />
                  Create Agent
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-3 inline-flex rounded-base border-2 border-border bg-[#7A83FF] p-3 shadow-shadow">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">MCP Integrations</CardTitle>
                <CardDescription>Connect Model Context Protocol servers to your agents</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg" variant="outline">
                  <Shield className="h-4 w-4" />
                  Add MCP Config
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-3 inline-flex rounded-base border-2 border-border bg-[#FACC00] p-3 shadow-shadow">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                <CardTitle className="text-xl">Settings</CardTitle>
                <CardDescription>Configure your account and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg" variant="secondary">
                  <User className="h-4 w-4" />
                  View Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
