# Scout Analytics v3 - Clean Monorepo

🎯 **Production-Ready Philippine FMCG Retail Intelligence Platform**

## Overview

Scout Analytics v3 is a modern retail analytics dashboard built specifically for Philippine FMCG market analysis. It provides real-time insights, AI-powered recommendations, and interactive data visualization.

## Features

- 📊 **Executive Dashboard** - KPI overview and business metrics
- 📈 **Regional Trends** - GeoHeatMap with drill-down capabilities  
- 🛒 **Product Mix Analysis** - Category performance and basket insights
- 👥 **Consumer Intelligence** - Demographics and behavior patterns
- 🤖 **RetailBot AI** - Intelligent assistant with contextual recommendations

## Architecture

```
scout-analytics-v3/
├── apps/
│   └── dashboard/          # Main React dashboard application
├── packages/
│   ├── shared/            # Shared utilities and types
│   ├── ui/                # Reusable UI components
│   └── data/              # Data layer and API clients
├── docs/                  # Documentation and specifications
└── deployment/           # Deployment configurations
```

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Lucide Icons
- **Backend**: Supabase (PostgreSQL)
- **AI**: Azure OpenAI GPT-4
- **Deployment**: Vercel
- **Monorepo**: Native workspaces

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
npm run deploy
```

## Live Demo

🌐 **Production**: https://scout-v3.vercel.app

## Data

- **5,000+ Transactions** - Comprehensive FMCG dataset
- **₱1.2M Revenue** - Real transaction data
- **17 Regions** - Full Philippine coverage
- **72 Brands** - Major FMCG players

## License

Private - TBWA Philippines

---

Built with ❤️ for Philippine retail intelligence