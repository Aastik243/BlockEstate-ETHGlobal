import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import ConnectWallet from "./components/ConnectWalletButton/ConnectWallet";
import Displaycards from "./components/Displaycards/Displaycard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <ConnectWallet /> */}
      <Displaycards />
      <Footer />
    </>
  );
}

export default App;
