import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { Navbar } from "./components/Layout/Navbar";
import { Footer } from "./components/Layout/Footer";
import { ScrollToTop } from "./components/Layout/ScrollToTop";
import { BackToTop } from "./components/UI/BackToTop";
import { CookieConsent } from "./components/UI/CookieConsent";
import { ChatWidget } from "./components/UI/ChatWidget";
import { Preloader } from "./components/UI/Preloader";
import { SocialProof } from "./components/UI/SocialProof";
const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("./pages/Services").then((m) => ({ default: m.Services })));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail").then((m) => ({ default: m.ServiceDetail })));
const Projects = lazy(() => import("./pages/Projects").then((m) => ({ default: m.Projects })));
const News = lazy(() => import("./pages/News").then((m) => ({ default: m.News })));
const Careers = lazy(() => import("./pages/Careers").then((m) => ({ default: m.Careers })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));
const Admin = lazy(() => import("./pages/Admin").then((m) => ({ default: m.Admin })));

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
      <Suspense fallback={<div className="min-h-[40vh] bg-cloud" />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/services/:slug" element={<PageTransition><ServiceDetail /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/news" element={<PageTransition><News /></PageTransition>} />
          <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/admin" element={<PageTransition><Admin /></PageTransition>} />
        </Routes>
      </Suspense>
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
