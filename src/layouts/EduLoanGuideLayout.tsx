import { Outlet } from 'react-router-dom';
import { Header } from '@/components/edu-loan-guide/Header';
import { Footer } from '@/components/edu-loan-guide/Footer';

export const EduLoanGuideLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
