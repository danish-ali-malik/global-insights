# Global Insights 🌍

A modern web application that provides real-time insights and comparisons of global economic indicators, demographic data, and key statistics across different countries. Built with modern web technologies for performance and scalability.

## Features ✨

- **Interactive World Map**: Visualize and compare country data with an interactive map interface
- **Real-time Analytics**: Track live economic indicators and demographic changes
- **Country Comparisons**: Side-by-side comparison of multiple countries across various metrics
- **Custom Data Views**: Create and save personalized dashboards for frequently monitored countries
- **Auto-Syncing**: Automatic synchronization of country data from reliable sources

## Getting Started 🚀

### Prerequisites

- Docker and Docker Compose
- Node.js 18.x or later

### Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/danish-ali-malik/global-insights.git
   cd global-insights
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables:

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your configuration by referring to `.env.example`

4. Start the database using Docker:

   ```bash
   npm run db:up
   ```

5. Generate Prisma client and run migrations:

   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts 📜

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Check TypeScript types
- `npm run validate` - Run all checks (lint, format, type-check)
- `npm run db:up` - Start database containers
- `npm run db:down` - Stop database containers
- `npm run db:logs` - View database container logs
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio
