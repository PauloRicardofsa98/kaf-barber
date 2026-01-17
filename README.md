<h1 align="center">
  Kaf Barber
</h1>

<!-- Screenshots section -->
<!-- <p align="center">
  <img alt="Kaf Barber Demo" src=".github/demo.gif" width="100%">
</p> -->

## Sobre o Projeto

Kaf Barber é uma plataforma web para agendamento de serviços em barbearias. O sistema permite que usuários visualizem barbearias disponíveis, consultem serviços oferecidos com seus respectivos preços, e realizem reservas de horários de forma intuitiva. A aplicação oferece autenticação via Google, gerenciamento de agendamentos e uma interface responsiva otimizada para dispositivos móveis.

---

## Funcionalidades

- **Autenticação Google OAuth** - Login seguro através de conta Google
- **Catálogo de Barbearias** - Listagem de barbearias recomendadas e populares
- **Detalhes de Serviços** - Visualização completa de serviços, preços e descrições
- **Sistema de Reservas** - Agendamento com seleção de data e horário
- **Gerenciamento de Agendamentos** - Visualização e controle de reservas do usuário
- **Interface Responsiva** - Design adaptado para mobile e desktop
- **Tema Dark Mode** - Interface otimizada com tema escuro

---

## Tecnologias

### Frontend
- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router e Server Components
- **[React 19](https://react.dev/)** - Biblioteca para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e não estilizados
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **[date-fns](https://date-fns.org/)** - Utilitários para manipulação de datas
- **[Sonner](https://sonner.emilkowal.ski/)** - Sistema de notificações toast

### Backend
- **[Prisma](https://www.prisma.io/)** - ORM para Node.js e TypeScript
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[NextAuth.js v5](https://next-auth.js.org/)** - Autenticação para Next.js
- **[@auth/prisma-adapter](https://authjs.dev/reference/adapter/prisma)** - Adaptador Prisma para NextAuth

### DevOps & Ferramentas
- **[Docker Compose](https://docs.docker.com/compose/)** - Orquestração de containers
- **[Husky](https://typicode.github.io/husky/)** - Git hooks automation
- **[ESLint](https://eslint.org/)** - Linter JavaScript/TypeScript
- **[Prettier](https://prettier.io/)** - Formatador de código

---

## Estrutura do Projeto

```
kaf-barber/
├── app/
│   ├── _components/       # Componentes reutilizáveis
│   │   └── ui/           # Componentes de interface (shadcn/ui)
│   ├── _constants/       # Constantes da aplicação
│   ├── _lib/             # Utilitários e configurações
│   ├── _providers/       # Context providers (Auth, Theme)
│   ├── api/
│   │   └── auth/         # API routes NextAuth
│   ├── barbershops/
│   │   └── [id]/         # Página de detalhes da barbearia
│   ├── auth.ts           # Configuração NextAuth
│   ├── layout.tsx        # Layout raiz da aplicação
│   └── page.tsx          # Página inicial
├── prisma/
│   ├── migrations/       # Migrações do banco de dados
│   ├── schema.prisma     # Schema do Prisma
│   └── seed.ts           # Seed do banco de dados
├── public/               # Assets estáticos
└── docker-compose.yml    # Configuração PostgreSQL
```

---

## English Version

### About

Kaf Barber is a web platform for booking barbershop services. The system allows users to browse available barbershops, view services with prices, and make reservations intuitively. The application features Google OAuth authentication, booking management, and a responsive interface optimized for mobile devices.

### Features

- Google OAuth authentication for secure login
- Barbershop catalog with recommended and popular listings
- Complete service details with prices and descriptions
- Booking system with date and time selection
- User appointment management
- Responsive design for mobile and desktop
- Dark mode optimized interface

### Tech Stack

**Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS, Radix UI, Lucide React, date-fns, Sonner

**Backend:** Prisma ORM, PostgreSQL, NextAuth.js v5, Prisma Adapter

**DevOps:** Docker Compose, Husky, ESLint, Prettier
