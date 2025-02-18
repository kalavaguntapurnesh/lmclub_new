import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/HeroSheet.mp4";
import { TiArrowRight } from "react-icons/ti";

const Hero = () => {
  const videoSrc = heroVideo;

  return (
    <section className="relative h-full w-full overflow-hidden select-none">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <motion.video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-whiteShade text-start px-4">
        <div className="max-w-[1400px] mx-auto w-[100%] mt-12 lg:px-2 space-y-4">
          <div>
            <h2 className="lg:text-[44px] lg:leading-[50px] text-3xl font-bold text-white text-end">
              Unlock the power of LM Club with our{" "}
              <br className="lg:block hidden" />
              game-changing widgets!
            </h2>
          </div>
          <div>
            <p className="pt-4 lg:text-lg text-white text-end">
              Welcome to LM Club – where networking meets opportunity! Our
              innovative widgets are
              <br className="lg:block hidden" />
              designed to empower, reward and make your life easier.
            </p>
          </div>
          <div className="pt-4 flex items-center justify-end lg:gap-6 gap-4">
            <a
              href="/contact-us"
              className="group border-[1px] relative px-6 py-2 text-gray-50 text-sm rounded-full border-gray-50  font-semibold overflow-hidden flex items-center gap-2 w-[200px] "
            >
              <span className="relative z-10 flex-[8] text-center">
                Learn More
              </span>
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-50 flex-[2] transition duration-1000 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                <TiArrowRight className=" text-lg" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
