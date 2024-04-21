import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import ConnectWallet from "./components/ConnectWalletButton/ConnectWallet";
import Displaycards from "./components/Displaycards/Displaycard";
import Footer from "./components/Footer/Footer";
import Propertypage from "./components/PropertyPage/Propertypage";
import ListPage from "./pages/ListPage/ListPage";
import FeaturedSpace from "./components/FeaturedSpaces/FeaturedSpace";
import HomePage from "./pages/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropertyDashboard from "./components/Propertydashboard/PropertyDashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/PropertyDetails/:id",
      element: <Propertypage />,
    },
    {
      path: "/ListPage",
      element: <ListPage />,
    },
    {
      path: "/PropertyDashboard",
      element: <PropertyDashboard />,
    },
  ]);
  return (
    <>
      {/* <Navbar />
      {/* <ConnectWallet /> */}
      {/* <Displaycards />
      <Footer /> */}
      <Propertypage />
      {/* <ListPage/> */}
      {/* <FeaturedSpace/> */}
    </>
  );
}

export default App;
