# Overview

This is a full-stack TypeScript application for an industrial automation company called "Autstand" that bridges the gap between traditional web development and industrial technology. The application serves as a marketing and informational platform showcasing how software engineers can transition from building web applications to controlling physical systems in manufacturing and industrial environments.

The platform features a modern landing page with sections highlighting industrial automation technologies like PLC programming, SCADA systems, Industrial IoT, and Digital Twins. It demonstrates code examples in industrial programming languages and MQTT messaging protocols, emphasizing the real-world impact of industrial software engineering.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, using functional components and hooks
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui design system for consistent, accessible components
- **Styling**: Tailwind CSS with custom design tokens and dark theme configuration
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast server bundling
- **API Design**: RESTful API structure with `/api` prefix routing

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless driver for cloud database connectivity
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Validation**: Zod schemas for runtime type validation integrated with Drizzle
- **Fallback Storage**: In-memory storage implementation for development/testing

## Authentication and Authorization
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **User Schema**: Basic user model with username/password authentication
- **Type Safety**: Shared TypeScript interfaces between client and server

## Build and Development Setup
- **Monorepo Structure**: Client and server code in separate directories with shared schema
- **Path Aliases**: TypeScript path mapping for clean imports (@, @shared, @assets)
- **Development Tools**: Hot reload, error overlay, and development banner for Replit environment
- **Asset Management**: Vite handles client-side assets with custom alias configuration

# External Dependencies

## Database and ORM
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **Drizzle Kit**: CLI tool for schema management and migrations

## UI and Styling
- **Radix UI**: Complete collection of accessible React component primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **shadcn/ui**: Pre-built component library built on Radix UI and Tailwind
- **Lucide React**: Modern icon library for consistent iconography
- **Google Fonts**: Inter, DM Sans, Architects Daughter, Fira Code, and Geist Mono

## Development and Build Tools
- **Vite**: Frontend build tool with React plugin and development server
- **esbuild**: Fast JavaScript/TypeScript bundler for server-side code
- **tsx**: TypeScript execution engine for development
- **Replit Plugins**: Cartographer, dev banner, and runtime error modal for Replit integration

## Additional Libraries
- **TanStack React Query**: Server state management and data fetching
- **React Hook Form**: Form handling with validation (@hookform/resolvers)
- **Wouter**: Minimalist routing library for React
- **date-fns**: Modern date utility library
- **nanoid**: URL-safe unique string ID generator
- **cmdk**: Command palette component for search interfaces
- **embla-carousel-react**: Touch-friendly carousel component