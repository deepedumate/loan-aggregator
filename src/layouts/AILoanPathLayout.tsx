import { Outlet } from 'react-router-dom';
import AILoanHeader from '@/components/ai-loan-path/AILoanHeader';

export const AILoanPathLayout = () => {
  return (
    <div className="min-h-screen">
      <AILoanHeader />
      <Outlet />
    </div>
  );
};
