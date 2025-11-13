import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Sparkles, Shield, Zap, Code2, ArrowRight, Settings } from "lucide-react";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="mx-auto max-w-7xl px-4 py-12 sm:py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex rounded-base border-2 border-border bg-main p-3 shadow-shadow sm:mb-6 sm:p-4">
              <Bot className="h-10 w-10 text-main-foreground sm:h-12 sm:w-12" />
            </div>
            <h1 className="mb-4 text-4xl font-heading text-foreground sm:text-5xl sm:mb-6 md:text-7xl">MCP Sandbox</h1>
            <p className="mb-6 text-lg font-base text-foreground/70 sm:text-xl sm:mb-8 md:text-2xl">
              Create and manage AI agents with Model Context Protocol integrations
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="lg" className="w-full text-base sm:w-auto sm:text-lg">
                <Link href="/auth/signin">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full text-base sm:w-auto sm:text-lg">
                <Link href="#features">
                  Learn More
                  <Sparkles className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-3xl font-heading text-foreground sm:mb-12 sm:text-4xl md:text-5xl">Powerful Features</h2>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-3 inline-flex rounded-base border-2 border-border bg-main p-3 shadow-shadow">
                    <Bot className="h-8 w-8 text-main-foreground" />
                  </div>
                  <CardTitle className="text-2xl">AI Agent Management</CardTitle>
                  <CardDescription className="text-base">
                    Create, configure, and deploy AI agents with custom behaviors and personalities
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 inline-flex rounded-base border-2 border-border bg-[#7A83FF] p-3 shadow-shadow">
                    <Code2 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">MCP Integration</CardTitle>
                  <CardDescription className="text-base">
                    Connect Model Context Protocol servers to enhance your agents with external tools
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 inline-flex rounded-base border-2 border-border bg-[#FACC00] p-3 shadow-shadow">
                    <Settings className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-2xl">Custom Configurations</CardTitle>
                  <CardDescription className="text-base">Fine-tune agent parameters, prompts, and behaviors to match your needs</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 inline-flex rounded-base border-2 border-border bg-[#FF4D50] p-3 shadow-shadow">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Secure & Private</CardTitle>
                  <CardDescription className="text-base">
                    Your data and configurations are encrypted and protected with enterprise-grade security
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 inline-flex rounded-base border-2 border-border bg-[#00D9A5] p-3 shadow-shadow">
                    <Zap className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-2xl">Lightning Fast</CardTitle>
                  <CardDescription className="text-base">
                    Built on modern infrastructure for instant responses and real-time interactions
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-3 inline-flex rounded-base border-2 border-border bg-[#9B59B6] p-3 shadow-shadow">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Easy to Use</CardTitle>
                  <CardDescription className="text-base">
                    Intuitive interface with powerful features - no coding required to get started
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="mb-3 text-2xl sm:mb-4 sm:text-4xl">Ready to get started?</CardTitle>
                <CardDescription className="text-base sm:text-lg">Create your account and start building AI agents in minutes</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button asChild size="lg" className="w-full text-base sm:w-auto sm:text-lg">
                  <Link href="/auth/signin">
                    <Bot className="h-5 w-5" />
                    Start Building Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-border bg-secondary-background py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-base text-foreground/70">
            Built with <span className="text-main">Next.js</span>, <span className="text-main">NextAuth</span>, and{" "}
            <span className="text-main">Neobrutalism</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
