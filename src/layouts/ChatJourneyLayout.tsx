import { Outlet } from 'react-router-dom';
import AILoanHeader from '@/components/chat-journey/AILoanHeader';

export const ChatJourneyLayout = () => {
  return (
    <div className="min-h-screen">
      <AILoanHeader />
      <Outlet />
    </div>
  );
};
