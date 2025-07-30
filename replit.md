# EquateShare Portfolio Management Application

## Overview

This is a modern full-stack web application for managing share portfolios and employee share purchase plans. Built with React, Express, TypeScript, and PostgreSQL, it provides a comprehensive dashboard for users to track their portfolio value, share prices, and manage tasks related to their share plans.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions

### Project Structure
- `client/` - Frontend React application
- `server/` - Backend Express server
- `shared/` - Shared TypeScript types and schemas
- `migrations/` - Database migration files

## Key Components

### Frontend Components
- **Layout Components**: Header with navigation, Footer
- **Dashboard Sections**: 
  - Hero carousel section with announcements
  - Portfolio value display with trend indicators
  - Share price tracking with real-time updates
  - Task management with timeline visualization
  - App download promotion section
- **UI Library**: Comprehensive set of reusable components (buttons, cards, dialogs, forms, etc.)

### Backend Services
- **Storage Interface**: Abstracted storage layer with both in-memory and database implementations
- **User Management**: User creation and authentication infrastructure
- **API Routes**: RESTful endpoints with `/api` prefix
- **Development Tools**: Hot reload with Vite integration in development

### Database Schema
- **Users Table**: Core user management with username/password authentication
- **Type Safety**: Drizzle-Zod integration for runtime validation

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express routes handle business logic and data validation
3. **Storage Layer**: Abstracted interface allows switching between storage implementations
4. **Database**: PostgreSQL with Drizzle ORM for type-safe operations
5. **Response**: JSON responses with error handling middleware

## External Dependencies

### Core Technologies
- **Database**: Neon Database (PostgreSQL-compatible serverless)
- **UI Components**: Radix UI primitives for accessibility
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns for date manipulation
- **Form Management**: React Hook Form with Zod validation

### Development Tools
- **Replit Integration**: Cartographer plugin and runtime error overlay
- **Build Process**: ESBuild for server bundling, Vite for client
- **Type Checking**: TypeScript strict mode with comprehensive type coverage

## Deployment Strategy

### Build Process
- **Client**: Vite builds optimized React bundle to `dist/public`
- **Server**: ESBuild compiles TypeScript server to `dist/index.js`
- **Database**: Drizzle migrations manage schema changes

### Environment Configuration
- **Development**: Vite dev server with Express backend
- **Production**: Static file serving with Express server
- **Database**: Environment variable configuration for DATABASE_URL

### Deployment Commands
- `npm run dev` - Development with hot reload
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Database schema deployment

The application follows modern full-stack patterns with clear separation between client and server, comprehensive type safety, and a scalable architecture that can grow from a simple portfolio tracker to a full-featured share plan management system.