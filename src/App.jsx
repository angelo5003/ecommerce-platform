import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navigation/NavBar/Navbar";
import ProductDetails from "./components/Product/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductDetails />
    </>
  );
}

export default App;
