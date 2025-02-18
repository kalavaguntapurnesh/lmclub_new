import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import WhatsApp from "../components/WhatsApp";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <WhatsApp />

      <div className="pt-24">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] ">
              <div className="p-4">
                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-center ">
                    <div className="h-4 w-1 bg-green-500"></div>
                    <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                      our blogs
                    </h1>
                  </div>

                  <div className="lg:text-4xl text-2xl text-center font-bold text-headingColor">
                    <h1>Latest blogs & news articles</h1>
                  </div>

                  <div className="text-gray-600 text-center">
                    <p>
                      Stay updated with the most recent insights, trends, and
                      stories from industry experts and analysts
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-3">
                    <div className="space-y-2">
                      <div>
                        <img
                          src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="one"
                          className="rounded"
                        />
                      </div>
                      <div className="text-gray-500 flex flex-row items-center space-x-3">
                        <p>November 30 2024</p>
                        <div className="w-[6px] h-[6px] rounded-full opacity-75 bg-gray-500"></div>
                        <p>5 mins read</p>
                      </div>

                      <div className="text-xl font-bold">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>

                      <div className="text-gray-500">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Rem vitae saepe rerum laborum illum itaque?
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <img
                          src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="one"
                          className="rounded"
                        />
                      </div>
                      <div className="text-gray-500 flex flex-row items-center space-x-3">
                        <p>February 7 2024</p>
                        <div className="w-[6px] h-[6px] rounded-full opacity-75 bg-gray-500"></div>
                        <p>15 mins read</p>
                      </div>

                      <div className="text-xl font-bold">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>

                      <div className="text-gray-500">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Rem vitae saepe rerum laborum illum itaque?
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <img
                          src="https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg?cs=srgb&dl=pexels-olly-838413.jpg&fm=jpg"
                          alt="one"
                          className="rounded"
                        />
                      </div>
                      <div className="text-gray-500 flex flex-row items-center space-x-3">
                        <p>December 24 2024</p>
                        <div className="w-[6px] h-[6px] rounded-full opacity-75 bg-gray-500"></div>
                        <p>8 mins read</p>
                      </div>

                      <div className="text-xl font-bold">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>

                      <div className="text-gray-500">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Rem vitae saepe rerum laborum illum itaque?
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
