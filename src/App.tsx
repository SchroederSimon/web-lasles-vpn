import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Contact } from "./pages/Contact/Contact";
import { Customers } from "./pages/Customers/Customers";
import { Features } from "./pages/Features/Features";
import { Footer } from "./pages/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Locations } from "./pages/Locations/Locations";
import { Pricing } from "./pages/Pricing/Pricing";
import { ThemeProvider } from "./ThemeContext";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ThemeProvider>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Home isMenuOpen={isMenuOpen} />
      <Features />
      <Pricing />
      <Locations />
      <Customers />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
