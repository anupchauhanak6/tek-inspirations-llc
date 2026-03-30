import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
