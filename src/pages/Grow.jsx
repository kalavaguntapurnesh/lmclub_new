import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { TiArrowRight } from "react-icons/ti";
import LaptopRewards from "../assets/LaptopRewards.png";
import money from "../assets/money.svg";
import profit from "../assets/Profits.svg";
import RewardTwo from "../assets/RewardTwo.svg";
import WhatsApp from "../components/WhatsApp";


const Grow = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <WhatsApp />

      <div className="lg:pt-36 pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div className="flex flex-col space-y-3 w-full">
                    <div className="flex items-center md:justify-start justify-center ">
                      <div className="h-4 w-1 bg-green-500"></div>
                      <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                        LM CLUB GROW
                      </h1>
                    </div>

                    <div className="lg:text-4xl text-2xl md:text-start text-center font-bold text-headingColor">
                      <h1>Welcome to LM Grow Rewards!</h1>
                    </div>

                    <div className="text-gray-600 space-y-2 md:text-start text-center">
                      <p>
                        The LM Grow Rewards program allows you to earn
                        redeemable points and achieve special milestones simply
                        by inviting others to join our community. Help us grow,
                        and in return, enjoy exclusive perks and rewards!
                      </p>
                      <p>
                        Keep track of your referrals in the LM Grow Rewards
                        dashboard. Each time you reach ten referrals, you’ll
                        earn extra points and a trophy to celebrate your
                        achievement.
                      </p>
                    </div>

                    <div className="pt-4 flex lg:justify-start justify-center flex-row gap-4">
                      <a
                        href="/pricing"
                        className="group border-[1px] relative px-6 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold overflow-hidden flex items-center gap-2 w-[200px] hover:bg-green-500 hover:text-white duration-1000 ease-in-out transition hover:font-medium"
                      >
                        <span className="relative flex-[8] text-center">
                          Learn More
                        </span>
                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                          <TiArrowRight className=" text-lg" />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-center items-center lg:pt-0 pt-4">
                    <div>
                      <img
                        src={LaptopRewards}
                        className="rounded w-auto h-auto"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-20">
                  <div>
                    <h2 className="lg:text-4xl text-2xl font-bold text-trumpTwo">
                      Key Features of the LM Club
                      <br className="lg:block hidden" /> Grow
                    </h2>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      Receive bonus points and a trophy for every tenth member
                      you bring into the community and win exciting prizes,
                      discounts.
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex justify-start items-center">
                          <img
                            src={RewardTwo}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex justify-start items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Earn Reward Points
                          </h1>
                        </div>
                        <div className="flex justify-start items-center text-gray-600 ">
                          <p>
                            Gain points each time someone joins the LM Club
                            using your referral link or code.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex justify-start items-center">
                          <img
                            src={profit}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex justify-start items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Trophy Achievement for Milestones
                          </h1>
                        </div>
                        <div className="flex justify-start items-center text-gray-600 ">
                          <p>
                            For every tenth referral, receive bonus points and a
                            prestigious trophy as a symbol of your dedication to
                            growing the community.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:justify-start justify-center">
                    <div className="w-full bg-white rounded p-6">
                      <div className="space-y-3">
                        <div className="flex justify-start items-center">
                          <img
                            src={money}
                            className="flex justify-center items-center w-12 h-12  "
                          ></img>
                        </div>

                        <div className="flex justify-start items-center">
                          <h1 className="text-2xl text-trumpTwo font-bold text-start">
                            Redeeming Reward Points
                          </h1>
                        </div>
                        <div className="flex justify-start items-center text-gray-600 ">
                          <p>
                            Accumulate points and redeem them for rewards such
                            as gift cards, discounts, or exclusive offers. Once
                            points have been redeemed the accumulated points
                            reset to Zero.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Grow;
