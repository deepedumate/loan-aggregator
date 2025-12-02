# Quick Start Guide - Merged Loan Application

## 🚀 Getting Started in 5 Minutes

### Step 1: Extract and Navigate
```bash
# Extract the zip file
unzip merged-loan-app.zip
cd merged-loan-app
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Application
```bash
npm run dev
```

The application will start on **http://localhost:4000**

## 📍 Available Routes

Once the app is running, you can access:

1. **Home/Loan Aggregator**: http://localhost:4000/
   - Main loan listing page with filters and comparison
   
2. **Loan Details**: http://localhost:4000/loans/:id
   - Detailed view of individual loans
   
3. **AI Loan Path**: http://localhost:4000/ai-loan-path
   - Conversational AI interface for loan recommendations

## 🎯 Key Features

### Edu Loan Guide Section (Routes: /, /loans, /loans/:id)
- ✅ Loan listing with advanced filters
- ✅ Loan comparison (up to 3 loans)
- ✅ Detailed loan information
- ✅ Header and Footer layout
- ✅ Sorting and filtering capabilities

### AI Loan Path Section (Route: /ai-loan-path)
- ✅ Conversational AI interface
- ✅ Step-by-step loan recommendation
- ✅ University and program selection
- ✅ Cost breakdown calculation
- ✅ Phone verification (mock)
- ✅ Full-screen chat layout

## 🔧 Production Deployment with PM2

### Install PM2 globally
```bash
npm install -g pm2
```

### Start the application
```bash
pm2 start ecosystem.config.js
```

### Useful PM2 Commands
```bash
# View status
pm2 status

# View logs
pm2 logs merged-loan-app

# Restart
pm2 restart merged-loan-app

# Stop
pm2 stop merged-loan-app

# Monitor
pm2 monit
```

## 🛠️ Development Tips

### Redux DevTools
Install the Redux DevTools browser extension to inspect state:
- [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

### State Management
The app uses Redux Toolkit with two main slices:

1. **loanSlice** - Manages loan products, filters, and comparisons
2. **chatSlice** - Manages AI chat conversation and form data

Access state anywhere in the app:
```typescript
import { useAppSelector, useAppDispatch } from '@/store/hooks';

const loans = useAppSelector(state => state.loan.loans);
const dispatch = useAppDispatch();
```

### API Integration
Replace mock APIs in `src/lib/apiService.ts` with your real backend:

```typescript
export const apiService = {
  invokeLoanChat: async (request) => {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    });
    return await response.json();
  }
};
```

## 📝 Common Tasks

### Add a New Page
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Choose appropriate layout (or create new one)

### Add Redux State
1. Create slice in `src/store/slices/`
2. Add to store in `src/store/index.ts`
3. Use with `useAppSelector` and `useAppDispatch`

### Customize Layouts
- Edit `src/layouts/EduLoanGuideLayout.tsx` for header/footer
- Edit `src/layouts/AILoanPathLayout.tsx` for minimal layout
- Create new layout for different sections

## 🐛 Troubleshooting

### Port already in use
```bash
# Change port in vite.config.ts or use:
npm run dev -- --port 3000
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
# Check TypeScript
npx tsc --noEmit
```

## 📦 Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

Build output will be in the `dist/` directory.

## 🎨 Customization

### Colors and Themes
- Edit `tailwind.config.ts` for theme colors
- Modify `src/index.css` for global styles
- Dark mode is built-in (toggle in header)

### Components
- Shared UI components in `src/components/ui/`
- App-specific components in respective folders
- All components use TypeScript for type safety

## 📚 Documentation

- [React Router](https://reactrouter.com/) - Routing
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Vite](https://vitejs.dev/) - Build tool

## ✨ Next Steps

1. Replace mock API with your backend
2. Add authentication if needed
3. Implement real OTP verification
4. Connect to loan provider APIs
5. Add analytics and monitoring
6. Deploy to your hosting platform

## 🤝 Need Help?

- Check the main README.md for detailed documentation
- Review Redux state in browser DevTools
- Check browser console for errors
- Inspect network requests in DevTools

---

Happy coding! 🚀
