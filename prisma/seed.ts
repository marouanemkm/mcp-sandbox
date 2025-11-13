import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  // Hash le mot de passe
  const hashedPassword = await bcrypt.hash("password123", 10);

  // Crée un utilisateur de test
  const user = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      name: "Admin User",
      password: hashedPassword,
    },
  });

  console.log("✅ Utilisateur créé:", user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
