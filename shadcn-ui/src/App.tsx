import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLenis } from '@/hooks/useLenis';
import Index from './pages/Index';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewTicket from './pages/NewTicket';
import TicketDetail from './pages/TicketDetail';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminNewTicket from './pages/AdminNewTicket';
import AdminTicketDetail from './pages/AdminTicketDetail';
import AdminUsers from './pages/AdminUsers';
import AdminNewUser from './pages/AdminNewUser';
import AdminEditUser from './pages/AdminEditUser';
import AdminUserManagement from './pages/AdminUserManagement';
import Setup from './pages/Setup';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';
import CookieBanner from './components/CookieBanner';
import WhatsAppWidget from './components/WhatsAppWidget';

const queryClient = new QueryClient();

const AppContent = () => {
  useLenis();
  
  return (
    <>
      <CookieBanner />
      <WhatsAppWidget />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-ticket" element={<NewTicket />} />
        <Route path="/ticket/:id" element={<TicketDetail />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/new-ticket" element={<AdminNewTicket />} />
        <Route path="/admin/ticket/:id" element={<AdminTicketDetail />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/users/new" element={<AdminNewUser />} />
        <Route path="/admin/users/edit/:id" element={<AdminEditUser />} />
        <Route path="/admin/user-management" element={<AdminUserManagement />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;