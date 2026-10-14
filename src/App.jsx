import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import { useReducedMotionSafe } from "./hooks/useReducedMotionSafe";
import { Navbar } from "./components/Layout/Navbar";
import { Footer } from "./components/Layout/Footer";
import { ScrollToTop } from "./components/Layout/ScrollToTop";
import { BackToTop } from "./components/UI/BackToTop";
import { CookieBanner } from "./components/UI/CookieConsent";
import { ChatWidget } from "./components/UI/ChatWidget";
import { MobileActionBar } from "./components/Layout/MobileActionBar";
const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("./pages/Services").then((m) => ({ default: m.Services })));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail").then((m) => ({ default: m.ServiceDetail })));
const SpecializedServiceDetail = lazy(() =>
  import("./pages/SpecializedServiceDetail").then((m) => ({ default: m.SpecializedServiceDetail }))
);
const Projects = lazy(() => import("./pages/Projects").then((m) => ({ default: m.Projects })));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail").then((m) => ({ default: m.ProjectDetail })));
const News = lazy(() => import("./pages/News").then((m) => ({ default: m.News })));
const NewsDetail = lazy(() => import("./pages/NewsDetail").then((m) => ({ default: m.NewsDetail })));
const Careers = lazy(() => import("./pages/Careers").then((m) => ({ default: m.Careers })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));
const Admin = lazy(() => import("./pages/Admin").then((m) => ({ default: m.Admin })));
const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));

export const PageTransition = ({ children }) => {
  const reducedMotion = useReducedMotionSafe();
  return (
  <motion.div
    id="main-content"
    initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.985, filter: "blur(8px)" }}
    animate={reducedMotion
      ? { opacity: 1 }
      : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
    exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -4, scale: 0.98, filter: "blur(8px)" }}
    transition={reducedMotion
      ? { duration: 0.16 }
      : { type: "spring", stiffness: 120, damping: 18, duration: 0.38 }}
  >
    {children}
  </motion.div>
  );
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<div className="min-h-[40vh] bg-cloud" />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/services/:slug" element={<PageTransition><ServiceDetail /></PageTransition>} />
          <Route path="/services/specialized/:slug" element={<PageTransition><SpecializedServiceDetail /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/projects/:slug" element={<PageTransition><ProjectDetail /></PageTransition>} />
          <Route path="/news" element={<PageTransition><News /></PageTransition>} />
          <Route path="/news/:slug" element={<PageTransition><NewsDetail /></PageTransition>} />
          <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/admin" element={<PageTransition><Admin /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export const App = () => {
  useEffect(() => {
    const addRipple = (event) => {
      const target = event.target.closest("button, a.home-button, a.mobile-action-button, .site-footer-quote");
      if (!target || target.hasAttribute("disabled")) return;
      const bounds = target.getBoundingClientRect();
      const diameter = Math.max(bounds.width, bounds.height);
      const ripple = document.createElement("span");
      ripple.className = "site-ripple";
      ripple.style.width = `${diameter}px`;
      ripple.style.height = `${diameter}px`;
      ripple.style.left = `${event.clientX - bounds.left - diameter / 2}px`;
      ripple.style.top = `${event.clientY - bounds.top - diameter / 2}px`;
      target.classList.add("has-ripple");
      target.append(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
    };

    document.addEventListener("pointerdown", addRipple);
    return () => document.removeEventListener("pointerdown", addRipple);
  }, []);

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <BrowserRouter>
        <div className="app-content">
          <a
            href="#main-content"
            className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg bg-gold px-4 py-3 text-sm font-semibold text-white transition focus:translate-y-0"
          >
            Skip to content
          </a>
          <ScrollToTop />
          <Navbar />
          <AppRoutes />
          <Footer />
          <BackToTop />
          <MobileActionBar />
          <CookieBanner />
          <ChatWidget />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
};
