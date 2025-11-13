"use client";

import { signIn } from "next-auth/react";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Eye, EyeOff, Loader2, Lock, Mail, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("Email ou mot de passe incorrect");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      setError("Une erreur s'est produite lors de la connexion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-size-[40px_40px] p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-base border-2 border-border bg-main p-4 shadow-shadow">
              <Lock className="h-8 w-8 text-main-foreground" />
            </div>
          </div>
          <h1 className="mb-2 text-4xl font-heading text-foreground">Connexion</h1>
          <p className="text-base font-base text-foreground/70">Accédez à votre espace personnel</p>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-main" />
                Bienvenue de retour!
              </CardTitle>
              <CardDescription>Entrez vos identifiants pour vous connecter</CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Adresse Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-foreground/50" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-11"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-foreground/50" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-11 pr-11"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 rounded-base border-2 border-transparent p-0.5 text-foreground/50 transition-all hover:border-border hover:text-foreground"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="flex items-start gap-3 rounded-base border-2 border-[#FF4D50] bg-[#FF4D50]/10 p-3 text-sm font-base">
                  <AlertCircle className="h-5 w-5 mt-0.5 shrink-0 text-[#FF4D50]" />
                  <span className="text-foreground">{error}</span>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Connexion en cours...
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4" />
                    Se connecter
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <p className="mt-6 text-center text-xs font-base text-foreground/50">
          Propulsé par <span className="font-heading text-main">NextAuth.js</span> + <span className="font-heading text-main">Neobrutalism</span>
        </p>
      </div>
    </div>
  );
}
