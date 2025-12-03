import { Outlet } from 'react-router-dom';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';

export const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main><Outlet /></main>
      <Footer />
    </div>
  );
};