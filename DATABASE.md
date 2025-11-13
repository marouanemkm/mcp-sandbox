# Airtable Chatbot - Configuration PostgreSQL

## 🚀 Démarrage rapide

### 1. Démarrer PostgreSQL avec Docker

```bash
docker-compose up -d
```

### 2. Appliquer le schéma Prisma à la base de données

```bash
bun run db:push
```

### 3. Créer un utilisateur de test

```bash
bun run db:seed
```

### 4. Lancer l'application

```bash
bun dev
```

## 📝 Identifiants de test

- **Email**: `admin@example.com`
- **Password**: `password123`

## 🛠 Commandes utiles

- `docker-compose up -d` - Démarrer PostgreSQL
- `docker-compose down` - Arrêter PostgreSQL
- `bun run db:push` - Synchroniser le schéma Prisma avec la DB
- `bun run db:seed` - Créer un utilisateur de test
- `bun run db:studio` - Ouvrir Prisma Studio (interface graphique pour la DB)

## 🗄️ Schéma de la base de données

Le projet utilise Prisma avec PostgreSQL pour gérer :

- **Users** : Utilisateurs avec email/password
- **Accounts** : Comptes liés aux providers OAuth
- **Sessions** : Sessions NextAuth
- **VerificationToken** : Tokens de vérification email

## 🔐 Variables d'environnement

Assurez-vous que `.env.local` contient :

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/airtable_chatbot?schema=public"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production
```
