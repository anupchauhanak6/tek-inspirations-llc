import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="pt-20">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
