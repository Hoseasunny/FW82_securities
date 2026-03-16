import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./components/Layout/Navbar";
import { Footer } from "./components/Layout/Footer";
import { ScrollToTop } from "./components/Layout/ScrollToTop";
import { BackToTop } from "./components/UI/BackToTop";
import { CookieConsent } from "./components/UI/CookieConsent";
import { ChatWidget } from "./components/UI/ChatWidget";
import { Preloader } from "./components/UI/Preloader";
import { SocialProof } from "./components/UI/SocialProof";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { News } from "./pages/News";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";
import { Admin } from "./pages/Admin";

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/news" element={<PageTransition><News /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/admin" element={<PageTransition><Admin /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <Preloader />
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
      <BackToTop />
      <CookieConsent />
      <ChatWidget />
      <SocialProof />
    </BrowserRouter>
  );
};
