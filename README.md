# MCP Sandbox

An AI agent platform built with Next.js, featuring a Neobrutalism design system and secure authentication. This project provides a foundation for creating and managing AI agents with MCP (Model Context Protocol) configurations.

## 🎯 Project Objective

MCP Sandbox is designed to be a modern platform for AI agent management, offering:

- **User Authentication**: Secure email/password authentication with NextAuth.js and PostgreSQL
- **AI Agent Management**: Dashboard for creating and configuring AI agents
- **MCP Configuration**: Support for Model Context Protocol integration
- **Modern UI**: Neobrutalism design system with dark mode support
- **Responsive Design**: Mobile-first approach ensuring optimal experience across all devices

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh) installed
- Docker and Docker Compose for PostgreSQL

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd airtable-chatbot
```

2. **Install dependencies**

```bash
bun install
```

3. **Set up environment variables**

Create a `.env` file:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5555/airtable_chatbot?schema=public"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production
```

4. **Start PostgreSQL**

```bash
docker-compose up -d
```

5. **Initialize the database**

```bash
bun run db:push
bun run db:seed
```

6. **Run the development server**

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Test Credentials

- **Email**: `admin@example.com`
- **Password**: `password123`

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript
- **Authentication**: NextAuth.js 4.24.13
- **Database**: PostgreSQL 16 + Prisma 6.19.0
- **Forms**: React Hook Form 7.66.0 + Zod 4.1.12
- **Data Fetching**: TanStack Query 5.90.8
- **UI Components**: shadcn/ui (custom Neobrutalism theme)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Package Manager**: Bun

## 🚀 Development

### Commands

```bash
# Development
bun dev                    # Start dev server
bun run build             # Build for production
bun start                 # Start production server

# Database
bun run db:push           # Push schema to database
bun run db:seed           # Seed test data
bun run db:studio         # Open Prisma Studio

# Docker
docker-compose up -d      # Start PostgreSQL
docker-compose down       # Stop PostgreSQL
docker-compose logs -f    # View logs
```

## 📝 Best Practices

1. **Server Components by default** - Add 'use client' only when needed
2. **Validate with Zod** - All user input must be validated
3. **Type-safe queries** - Use Prisma's generated types
4. **Error boundaries** - Handle errors gracefully
5. **Accessibility** - Use semantic HTML and ARIA labels

## 📄 License

MIT License - feel free to use this project as a foundation for your own applications.
