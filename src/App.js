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
import HomePage from "./pages/Homepage/HomePage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FeaturedSpace />,
    },
    {
      path: "/PropertyDetails/:id",
      element: <Propertypage />,
    },
    {
      path: "/ListPage",
      element: <ListPage />,
    },
    {},
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  );
}

export default App;
