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
import MyProfile from "./pages/MyProfile";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import AuthNavbar from "./components/AuthNavbar";
import Sidebar from "./components/Sidebar";
import Addresses from "./pages/Addresses";
import MyOrders from "./pages/MyOrders.jsx";
import ECommerce from "./pages/ECommerce";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundAndReturnPolicy from "./pages/RefundAndReturnPolicy";
import PaymentMethods from "./pages/PaymentMethods";
import PayPalSuccessPage from "./pages/PayPalSuccessPage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProductOverview from "./pages/ProductOverview";
import ECommerceCart from "./pages/ECommerceCart";
import ECommerceCartProvider from "./context/ECommerceCartContext";
import HandlePaymentEcommerce from "./pages/HandlePaymentEcommerce";
import ECommercePaymentMethods from "./pages/ECommercePaymentMethods";
import AllWidgetTsAndCs from "./pages/AllWidgetTsAndCs.jsx";
import MySubscriptions from "./pages/MySubscriptions.jsx";
import MyMembership from "./pages/MyMembership.jsx";
import MyPayments from "./pages/MyPayments.jsx";
import AllMembershipPackage from "./pages/AllMembershipPackage";
import BeehiveFunctionality from "./pages/BeehiveFunctionality.jsx";
import BeehiveViewPosts from "./pages/BeehiveViewPosts.jsx";
import BeehiveAddPosts from "./pages/BeehiveAddPosts.jsx";
import Redeem from "./pages/ReedemNow.jsx"
import BeehiveMyPosts from "./pages/BeehiveMyPosts.jsx";
import Referal from "./pages/Referal.jsx";
import RewardCard from "./pages/RewardCard.jsx";
import BeehiveMyLikedPosts from "./pages/BeehiveMyLikedPosts.jsx";
import BeehiveMySavedPosts from "./pages/BeehiveMySavedPosts.jsx";
import growFunctionality from "./pages/growFunctionality.jsx";
import Faqs from "./pages/Faqs.jsx";
import SharablePost from "./pages/SharablePost.jsx";

function App() {
  const { token } = useContext(AppContext);

  return token ? (
    <div className="bg-[#f8f9fd]">
      <ToastContainer />
      <AuthNavbar />
      <div className="flex items-start">
        <Sidebar />
        <ECommerceCartProvider>
            <Routes>
              <Route path="/my-profile" element={<MyProfile />} />
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/my-addresses" element={<Addresses />}></Route>
              <Route path="/my-orders" element={<MyOrders />}></Route>
              <Route path="/my-subscription" element={<MySubscriptions />}></Route>
              <Route path="/my-membership" element={<MyMembership />}></Route>
              <Route path="/my-payments" element={<MyPayments />}></Route>
              <Route path="/payment" element={<HandlePayment />} />
              <Route path="/select-payment-method" element={<PaymentMethods />} />
              <Route
                path="/api/paypal/complete-order"
                element={<PayPalSuccessPage />}
              />
              <Route path="/api/paypal/cancel-order/:token" element={<Failure />} />
              <Route path="/payment-success" element={<Success />} />
              <Route path="/ecommerce" element={<ECommerce />}></Route>
              <Route path="/product-overview/:id" element={<ProductOverview />} />
              <Route path="/ecommerce-cart" element={<ECommerceCart />} />
              <Route
                path="/ecommerce-payment"
                element={<HandlePaymentEcommerce />}
              />
              <Route
                path="/ecommerce-select-payment-methods"
                element={<ECommercePaymentMethods />}
              />
              <Route
                path="/beehive-workflow"
                element={<BeehiveFunctionality />}
              />
              <Route
                path="/beehive-workflow/view-posts"
                element={<BeehiveViewPosts />}
              />
              <Route
                path="/beehive-workflow/add-posts"
                element={<BeehiveAddPosts />}
              />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route
                path="/beehive-workflow/view-posts/my-posts"
                element={<BeehiveMyPosts />}
              />
              <Route
                path="/beehive-workflow/view-posts/liked-posts"
                element={<BeehiveMyLikedPosts />}
              />
               <Route
                path="/beehive-workflow/view-posts/saved-posts"
                element={<BeehiveMySavedPosts />}
              />
              <Route path="/redeem-now" element={<Redeem />} />
              
            </Routes>
        </ECommerceCartProvider>
      </div>
    </div>
  ) : (
    <ECommerceCartProvider>
      <CartProvider>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route
            path="/widget-terms-and-conditions/:widget"
            element={<AllWidgetTsAndCs />}
          />
          <Route
            path="/AllMembershipPackage/:membership"
            element={<AllMembershipPackage />}
          />
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route path="/estore" element={<Estore />}></Route>
          <Route path="/beehive" element={<Beehive />}></Route>
          <Route path="/network" element={<Network />}></Route>
          <Route path="/grow" element={<Grow />}></Route>
          <Route path="/broadcast" element={<Broadcast />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/referal" element={<Referal />}></Route>
          <Route path="/rewardcard" element={<RewardCard />}></Route>
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
          <Route path="/faqs" element={<Faqs/>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/events" element={<Events />}></Route>

          <Route path="/ecommerce" element={<ECommerce />}></Route>

          <Route path="/enroll-rewards" element={<Enroll_Rewards />}></Route>
          <Route path="/rewards" element={<Rewards />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/selected-plan" element={<SelectedPlan />}></Route>
          <Route path="/selected-plan/cart" element={<Cart />} />
          {/* <Route path="/payment" element={<HandlePayment />} /> */}
          <Route path="/payment" element={<HandlePayment />} />
          <Route path="/payment-success" element={<Success />} />
          <Route path="/payment-failed" element={<Failure />} />

          <Route path="/product-overview/:id" element={<ProductOverview />} />

          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route
            path="/refund-and-return-policy"
            element={<RefundAndReturnPolicy />}
          />
          <Route path="/select-payment-method" element={<PaymentMethods />} />

          <Route
            path="/api/paypal/complete-order"
            element={<PayPalSuccessPage />}
          />
          <Route path="/api/paypal/cancel-order/:token" element={<Failure />} />

          <Route path="/cancel-order/:token" element={<Failure />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/ecommerce-cart" element={<ECommerceCart />} />
          <Route
            path="/ecommerce-payment"
            element={<HandlePaymentEcommerce />}
          />
          <Route
            path="/ecommerce-select-payment-methods"
            element={<ECommercePaymentMethods />}
          />
          <Route path="/redeem-now" element={<Redeem />} />
          <Route
                path="/beehive-posts/:postId"
                element={<SharablePost />}
              />
        </Routes>
      </CartProvider>
    </ECommerceCartProvider>
  );
}

export default App;