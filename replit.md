# AI Tools Presentation - BPN Foundation

## Overview

This is a full-stack React application that displays an interactive HTML presentation about AI tools introduction at BPN Foundation. The application is built with a React frontend that redirects to a static HTML presentation showcasing secure AI tools like ChatGPT Teams and Gemini Workspace.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for the main application framework
- **Vite** as the build tool and development server
- **Tailwind CSS** for styling with custom BPN brand colors
- **shadcn/ui** component library for consistent UI components
- **Wouter** for client-side routing
- **TanStack Query** for server state management

### Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** structure (currently minimal implementation)
- **In-memory storage** for user data (MemStorage class)
- **Session management** with connect-pg-simple (prepared for PostgreSQL)

### Database Strategy
- **Drizzle ORM** configured for PostgreSQL
- **Schema definitions** in shared folder for type safety
- **Migration support** with drizzle-kit
- Currently using in-memory storage with interface for easy database integration

## Key Components

### Presentation System
- **Static HTML presentation** (`client/public/presentation.html`) with interactive features
- **React redirect component** that forwards users to the static presentation
- **BPN brand integration** with custom color scheme (turquoise, green, grey)
- **Interactive animations** and slide transitions

### UI Framework
- **Comprehensive component library** with 40+ shadcn/ui components
- **Responsive design** with mobile-first approach
- **Dark/light theme support** via CSS custom properties
- **Accessibility features** built into components

### Development Infrastructure
- **TypeScript configuration** with strict mode and modern ES modules
- **Path aliases** for clean imports (@/, @shared/, @assets/)
- **Development tools** including runtime error overlay and cartographer
- **Production build** optimization with esbuild

## Data Flow

1. **User Access**: Users navigate to the root path `/` or `/presentation`
2. **React Router**: Wouter handles routing and loads the Presentation component
3. **Redirect Logic**: Presentation component automatically redirects to `/presentation.html`
4. **Static Presentation**: Users interact with the full-featured HTML presentation
5. **API Ready**: Backend structure prepared for future data persistence and user management

## External Dependencies

### Core Framework Dependencies
- **React ecosystem**: React 18, React DOM, React Hook Form
- **Build tools**: Vite, esbuild, TypeScript
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer

### UI and UX Libraries
- **shadcn/ui**: Complete component library with Radix UI primitives
- **Lucide React**: Icon library
- **TanStack Query**: Server state management
- **Date-fns**: Date manipulation utilities

### Backend Dependencies
- **Express.js**: Web server framework
- **Drizzle ORM**: Database toolkit with Zod integration
- **Neon Database**: Serverless PostgreSQL driver
- **Security**: CORS, session management preparation

### Development Tools
- **Replit integration**: Development banner and cartographer
- **Error handling**: Runtime error modal overlay
- **Code quality**: TypeScript strict mode, ESLint-ready structure

## Deployment Strategy

### Production Build Process
1. **Frontend build**: Vite compiles React app to static assets in `dist/public`
2. **Backend build**: esbuild bundles Express server to `dist/index.js`
3. **Static assets**: HTML presentation served directly from public folder
4. **Environment**: NODE_ENV controls development vs production behavior

### Environment Configuration
- **Database**: PostgreSQL via DATABASE_URL environment variable
- **Development**: Hot reload with Vite middleware integration
- **Production**: Static file serving with Express

### Scaling Considerations
- **Database ready**: Drizzle ORM configured for PostgreSQL scaling
- **Session storage**: Prepared for PostgreSQL session store
- **Static assets**: Presentation can be served via CDN
- **API expansion**: Backend structure supports additional endpoints

### Security Features
- **Environment variables**: Sensitive data handled via environment configuration
- **Type safety**: Full TypeScript coverage for runtime safety
- **CORS preparation**: Ready for cross-origin request handling
- **Session management**: Infrastructure for user authentication

The application demonstrates a hybrid approach combining modern React development with static HTML for optimal presentation delivery, while maintaining a scalable backend architecture for future enhancements.