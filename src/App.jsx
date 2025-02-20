import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Privacy from "./pages/Privacy";
import Enroll_Rewards from "./pages/Enroll_Rewards";
import Rewards from "./pages/Rewards";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import Estore from "./pages/Estore";
import Beehive from "./pages/Beehive";
import Network from "./pages/Network";
import Grow from "./pages/Grow";
import Broadcast from "./pages/Broadcast";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import VerifyEmail from "./pages/VerifyEmail";
import OtpAndEmailVerification from "./pages/OtpAndEmailVerification";
import SelectedPlan from "./pages/SelectedPlan";
import Cart from "./pages/Cart";
import CartProvider from "./context/CartContext";
import HandlePayment from "./pages/HandlePayment";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import Videos from "./pages/Videos";
import { ToastContainer } from "react-toastify";
import SecNavbar from "./components/SecNavbar";
import Footer from "./components/Footer";
import MyProfile from "./pages/MyProfile";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import AuthNavbar from "./components/AuthNavbar";
import Sidebar from "./components/Sidebar";
import Addresses from "./pages/Addresses";
import Orders from "./pages/Orders";
import UserSubscription from './pages/UserSubscription';
function App() {
  const { token } = useContext(AppContext);

  return token ? (
    <div className="bg-[#f8f9fd]">
      <ToastContainer />
      <AuthNavbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/my-addresses" element={<Addresses />}></Route>
          <Route path="/my-orders" element={<Orders />}></Route>
          <Route path="/my-subscription" element={<UserSubscription />}></Route>
        </Routes>
      </div>
    </div>
  ) : (
    <CartProvider>
      <ToastContainer />
      {/* <SecNavbar /> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/estore" element={<Estore />}></Route>
        <Route path="/beehive" element={<Beehive />}></Route>
        <Route path="/network" element={<Network />}></Route>
        <Route path="/grow" element={<Grow />}></Route>
        <Route path="/broadcast" element={<Broadcast />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route
          path="/otp-verification"
          element={<OtpAndEmailVerification />}
        ></Route>

        <Route path="/learn-about-us" element={<About />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/videos" element={<Videos />}></Route>

        <Route path="/register" element={<Register />}></Route>
        <Route path="/events" element={<Events />}></Route>

        <Route path="/privacy-policy" element={<Privacy />}></Route>

        <Route path="/enroll-rewards" element={<Enroll_Rewards />}></Route>
        <Route path="/rewards" element={<Rewards />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        {/* <Route path="/products" element={<Products />}></Route> */}
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/selected-plan" element={<SelectedPlan />}></Route>
        <Route path="/selected-plan/cart" element={<Cart />} />
        <Route path="/payment" element={<HandlePayment />} />
        <Route path="/payment-success" element={<Success />} />
        <Route path="/payment-failed" element={<Failure />} />
      </Routes>

      {/* <Footer /> */}
    </CartProvider>
  );
}

export default App;
