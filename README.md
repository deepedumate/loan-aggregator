# Merged Loan Application

This is a merged React application combining two educational loan platforms:
1. **Edu Loan Guide** - A loan aggregator with comparison features
2. **AI Loan Path** - An AI-powered conversational loan recommendation system

## Features

- 🔄 **Redux State Management** - Centralized state management using Redux Toolkit
- 🎨 **Separate Layouts** - Each application maintains its own header/footer layout
- 🚀 **Port 4000** - Configured to run on port 4000
- 📦 **PM2 Ready** - Includes PM2 ecosystem configuration for production deployment
- 🎯 **No Supabase** - Removed Supabase dependencies, replaced with mock API service

## Project Structure

```
merged-loan-app/
├── src/
│   ├── components/
│   │   ├── ui/                    # Shared UI components (shadcn/ui)
│   │   ├── edu-loan-guide/        # Edu Loan Guide specific components
│   │   └── chat-journey/          # AI Loan Path specific components
│   ├── layouts/
│   │   ├── EduLoanGuideLayout.tsx # Layout with header/footer
│   │   └── AILoanPathLayout.tsx   # Minimal layout for chat interface
│   ├── pages/
│   │   ├── Home.tsx               # Home page
│   │   ├── LoanAggregator.tsx     # Loan listing and filtering
│   │   ├── LoanDetails.tsx        # Individual loan details
│   │   ├── AILoanPath.tsx         # AI chat interface
│   │   └── NotFound.tsx           # 404 page
│   ├── store/
│   │   ├── index.ts               # Redux store configuration
│   │   ├── hooks.ts               # Typed Redux hooks
│   │   └── slices/
│   │       ├── loanSlice.ts       # Loan state management
│   │       └── chatSlice.ts       # Chat state management
│   ├── lib/
│   │   ├── utils.ts               # Utility functions
│   │   └── apiService.ts          # API service (replaces Supabase)
│   └── hooks/                     # Custom React hooks
├── public/                        # Static assets
├── ecosystem.config.js            # PM2 configuration
└── package.json
```

## Routes

### Edu Loan Guide Routes (with Header/Footer)
- `/` - Home page (redirects to /loans)
- `/loan-offers` - Loan aggregator page
- `/loan-offers/:id` - Individual loan details

### AI Loan Path Routes (minimal layout)
- `/loan-application` - AI-powered loan recommendation chat

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Run development server on port 4000
npm run dev

# The app will be available at http://localhost:4000
```

## Build

```bash
# Build for production
npm run build

# Build for development
npm run build:dev
```

## PM2 Deployment

```bash
# Start with PM2
pm2 start ecosystem.config.js

# Stop application
pm2 stop merged-loan-app

# Restart application
pm2 restart merged-loan-app

# View logs
pm2 logs merged-loan-app

# Monitor
pm2 monit
```

## Technology Stack

- **React 18.3** - UI library
- **TypeScript 5.8** - Type safety
- **Redux Toolkit 2.0** - State management
- **React Router 6.30** - Routing
- **Vite 5.4** - Build tool
- **Tailwind CSS 3.4** - Styling
- **shadcn/ui** - Component library
- **React Query 5.83** - Server state management

## Redux State Structure

### Loan Slice
- Manages loan products, filters, sorting, and comparison
- Actions: `setLoans`, `addLoanToComparison`, `setFilters`, etc.

### Chat Slice
- Manages AI chat conversation state, form data, and user inputs
- Actions: `addMessage`, `setStep`, `updateFormData`, etc.

## API Service

The `apiService.ts` file provides mock implementations for the backend API. You can extend this to connect to your real backend:

```typescript
// Example: Update apiService to call real endpoints
export const apiService = {
  invokeLoanChat: async (request) => {
    const response = await fetch('https://your-api.com/loan-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    });
    return await response.json();
  }
};
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://your-api-endpoint.com
VITE_PORT=4000
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT
