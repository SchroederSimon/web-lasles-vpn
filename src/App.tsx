import "./App.css";
//import ButtonPrimary from "./components/Button-primary/ButtonPrimary";
import { Navbar } from "./components/Navbar/Navbar";
import { Customers } from "./pages/Customers/Customers";
import { Features } from "./pages/Features/Features";
import { Home } from "./pages/Home/Home";
import { Locations } from "./pages/Locations/Locations";
import { Pricing } from "./pages/Pricing/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Pricing />
      <Locations/>
      <Customers/>
    </>
  );
}

export default App;
