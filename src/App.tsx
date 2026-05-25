import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import GalleryPage from './pages/Gallery';
import AboutPage from './pages/About';
import ReservePage from './pages/Reserve';
import PrivacyPage from './pages/Privacy';
import LegalPage from './pages/Legal';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// WhatsApp FAB - Hides on reservation page
const WhatsAppFAB = ({ openWhatsApp }: { openWhatsApp: () => void }) => {
  const location = useLocation();
  if (location.pathname === '/reservar') return null;
  return (
    <button 
      onClick={openWhatsApp}
      className="fixed bottom-10 right-10 z-50 bg-accent text-background p-5 rounded-none shadow-[0_0_50px_rgba(233,195,73,0.3)] hover:bg-white transition-smooth flex items-center justify-center border border-accent hover:border-white accent-glow group cursor-pointer"
      aria-label="Reservar por WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current group-hover:scale-110 transition-transform">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964 1.003-3.586c-.608-1.066-.928-2.298-.928-3.568 0-3.928 3.195-7.124 7.124-7.124 3.929 0 7.124 3.196 7.124 7.124 0 3.928-3.196 7.124-7.124 7.124z"/>
      </svg>
    </button>
  );
};

const App = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/34606242706?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20De-Vos', '_blank');
  };

  return (
    <Router>
      <ScrollToTop />
      <main className="relative min-h-screen bg-background text-white selection:bg-accent selection:text-background overflow-hidden">
        {/* Capa de ruido sutil global */}
        <div className="fixed inset-0 bg-noise z-[1] pointer-events-none opacity-[0.03]" />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar openWhatsApp={openWhatsApp} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/reservar" element={<ReservePage />} />
          <Route path="/privacidad" element={<PrivacyPage />} />
          <Route path="/aviso-legal" element={<LegalPage />} />
        </Routes>

        <Footer openWhatsApp={openWhatsApp} />
        </div>

        <WhatsAppFAB openWhatsApp={openWhatsApp} />
      </main>
    </Router>
  );
}

export default App;
