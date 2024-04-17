import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import ConnectWallet from "./components/ConnectWalletButton/ConnectWallet";
import Displaycards from "./components/Displaycards/Displaycard";
import Footer from "./components/Footer/Footer";
import HeroSectionText from "./components/HeroSectionText/HeroSectionText";
import HouseCarousel from "./components/HouseCarousel/HouseCarousel";
import FeaturedSpace from "./components/FeaturedSpaces/FeaturedSpace";
import HomePage from "./pages/Homepage/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
