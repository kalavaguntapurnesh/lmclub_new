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
import VerifyEmailForBussinessUser from "./pages/VerifyEmailForBussinessUser";
import OtpAndEmailVerification from "./pages/OtpAndEmailVerification";
import OtpAndEmailVerificationForBussinessUser from "./pages/OtpAndEmailVerificationForBussinessUser";
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
import UserSubscription from "./pages/UserSubscription";
import ECommerce from "./pages/ECommerce";
import GrowTAC from "./pages/GrowTAC";
import NetworkTAC from "./pages/NetworkTAC";
import BeehiveTAC from "./pages/BeehiveTAC";
import EstoreTAC from "./pages/EstoreTAC";
import BroadcastTAC from "./pages/BroadcastTAC";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundAndReturnPolicy from "./pages/RefundAndReturnPolicy";
import PaymentMethods from "./pages/PaymentMethods";
import PayPalSuccessPage from "./pages/PayPalSuccessPage";
// import OrganisationRegister from "./pages/OrganisationRegister";
// import OrganisationLogin from "./pages/OrganisationLogin";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

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
        <Route path="/grow-terms-and-conditions" element={<GrowTAC />}></Route>
        <Route
          path="/network-terms-and-conditions"
          element={<NetworkTAC />}
        ></Route>
        <Route
          path="/beehive-terms-and-conditions"
          element={<BeehiveTAC />}
        ></Route>
        <Route
          path="/e-store-terms-and-conditions"
          element={<EstoreTAC />}
        ></Route>
        <Route
          path="/broadcast-terms-and-conditions"
          element={<BroadcastTAC />}
        ></Route>

        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/estore" element={<Estore />}></Route>
        <Route path="/beehive" element={<Beehive />}></Route>
        <Route path="/network" element={<Network />}></Route>
        <Route path="/grow" element={<Grow />}></Route>
        <Route path="/broadcast" element={<Broadcast />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route
          path="/verify-bussiness-email/:token"
          element={<VerifyEmailForBussinessUser />}
        />
        <Route
          path="/otp-verification"
          element={<OtpAndEmailVerification />}
        ></Route>

        <Route
          path="/otp-verification-for-bussiness"
          element={<OtpAndEmailVerificationForBussinessUser />}
        ></Route>

        <Route path="/learn-about-us" element={<About />}></Route>

        <Route path="/privacy-policy" element={<Privacy />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/videos" element={<Videos />}></Route>

        <Route path="/register" element={<Register />}></Route>
        <Route path="/events" element={<Events />}></Route>

        <Route path="/privacy-policy" element={<Privacy />}></Route>
        <Route path="/ecommerce" element={<ECommerce />}></Route>

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

        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route
          path="/refund-and-return-policy"
          element={<RefundAndReturnPolicy />}
        />
        <Route path="/select-payment-method" element={<PaymentMethods />} />
        <Route path="/complete-order" element={<PayPalSuccessPage />} />
        {/* <Route
          path="/organisation-register"
          element={<OrganisationRegister />}
        />
        <Route path="/organisation-login" element={<OrganisationLogin />} /> */}
        <Route path="/cancel-order/:token" element={<Failure />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:id/:token" element={<ResetPassword />} />
      </Routes>

      {/* <Footer /> */}
    </CartProvider>
  );
}

export default App;
