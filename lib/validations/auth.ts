import { z } from "zod";

export const signInSchema = z.object({
  email: z.email({ message: "Adresse email invalide" }).min(1, { message: "L'email est requis" }),
  password: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
});

export type SignInFormData = z.infer<typeof signInSchema>;
