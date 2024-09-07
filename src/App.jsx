import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Collection from "./pages/Collection";
import Product from "./components/Product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";
import CartTotal from "./components/CartTotal";
import PlaceOrder from "./pages/PlaceOrder";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Footer from "./components/Footer";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <div className="flex flex-col min-h-screen body">
        <ToastContainer />
        <Navbar />

        {/* Main content container */}
        <div className="flex-grow flex flex-col items-center px-5 pb-10 w-full">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/products"} element={<Collection />} />

            {/* Conditional routes based on login state */}
            {isLoggedIn ? (
              <>
                <Route path={"/cart"} element={<Cart />} />
                <Route path={"/product/:productId"} element={<Product />} />
                <Route path={"/carttotal"} element={<CartTotal />} />
                <Route path={"/placeorder"} element={<PlaceOrder />} />
                {/* Redirect to home if trying to access login/signup while logged in */}
                <Route path={"/login"} element={<Navigate to="/" replace />} />
                <Route path={"/signup"} element={<Navigate to="/" replace />} />
              </>
            ) : (
              <>
                <Route path={"/login"} element={<Login />} />
                <Route path={"/signup"} element={<SignUp />} />
                {/* Redirect to home if trying to access protected routes while logged out */}
                <Route
                  path={"/cart"}
                  element={<Navigate to="/login" replace />}
                />
                <Route
                  path={"/product/:productId"}
                  element={<Navigate to="/login" replace />}
                />
                <Route
                  path={"/carttotal"}
                  element={<Navigate to="/login" replace />}
                />
                <Route
                  path={"/placeorder"}
                  element={<Navigate to="/login" replace />}
                />
              </>
            )}

            {/* Handle unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
