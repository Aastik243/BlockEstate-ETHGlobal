import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import ConnectWallet from "./components/ConnectWalletButton/ConnectWallet";
import Displaycards from "./components/Displaycards/Displaycard";
import Footer from "./components/Footer/Footer";
import UploadFile from "./components/UploadFile/UploadFile";
import Propertypage from "./pages/PropertyPage/Propertypage";

function App() {
  return (
    <div className="App">
      <Propertypage/> 
    </div>
  );
}

export default App;
