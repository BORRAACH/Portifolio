import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" index />
        </Routes>
        <Footer ref={ref} isInView={isInView} />
      </Router>
    </>
  );
}

export default App;
