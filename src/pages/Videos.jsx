
import { TiArrowRight } from "react-icons/ti";
import Intro from "../assets/Intro.mp4";
import Logo from "../assets/VideoTwo.mp4";
import Logo1 from "../assets/VideoThree.mp4";
import Demo from "../assets/demo.mp4";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VideoPlayer = () => {
  const videoSections = [
    {
      title: "About the Logo",
      subtitle: "Laoe Maom (LAOE MAOM): Least Amount of Effort, Most Amount of Money",
      description:
        "Laoe Maom embodies progress and adaptability, responding dynamically to the evolving relationships and interests in our global landscape. We are a collective of individuals and businesses worldwide, committed to mutual support and shared success. By joining forces, we breathe life into businesses and nurture them to thrive. Let’s achieve greatness together.",
      src: Logo,
      buttonText: "Contact Us",
      reverse: false,
    },
    {
      title: "About the Logo",
      subtitle: "Laoe Maom: Empowering Global Collaboration for Growth and Success",
      description:
        "Laoe Maom represents progress and adaptability, evolving alongside the shifting relationships and interests of our global community. We are a network of individuals and businesses worldwide, dedicated to mutual support and shared success. By collaborating, we bring businesses to life and help them flourish. Together, we can achieve greatness.",
      src: Logo1,
      buttonText: "Reach Out",
      reverse: true, 
    },
    {
      title: "Introduction",
      subtitle: "Unity in Diversity: The True Essence of Humanity",
      description:
        "Look at Your Skin. It's just a colour—nothing more, nothing less. But beneath it, we all bleed the same red. This world has taught us to divide, to judge, to hate based on something as simple as pigment. But tell me, what does hate accomplish? Does it heal? Does it unite? Does it build? Number—hate only destroys. We are black, white, brown, every shade in between, painted by the hands of a creator or perhaps by the miracle of nature, each colour a brushstroke on the masterpiece of humanity. But when we strip away the skin, we all carry the same beating heart, the same dreams, the same fears. And in the end, we all meet the same fate—six feet under. Do you think the earth cares what colour you are? Do you think death discriminates? It’s time to wake up. This life is fleeting, and we share this one planet. Hate is the real enemy, not each other. So let’s rise above, hand in hand, as one race—humanity. Stop the hate because at the core of it all, we are one.",
      src: Demo,
      buttonText: "Get in Touch",
      reverse: false,
    },
    {
      title: "About LM Club",
      subtitle: "Empowering Connections, Cultivating Success",
      description:
        "At Laoe Maom, we are dedicated to fostering a vibrant culture that propels our members and businesses to connect, collaborate, and create opportunities. Anchored in the principle of TEAM (Together Everyone Achieves More), we harness the power of human cooperation to accomplish significant goals incrementally.",
      src: Intro,
      buttonText: "Touch with us",
      reverse: true, 
    },
  ];

  return (
    <div className="lg:pt-28 pt-16">
      <Navbar />
      {videoSections.map((section, index) => (
        <div key={index} className="h-auto flex flex-col justify-center items-center py-6">
          <div className="w-full mx-auto max-w-[1400px] grid md:grid-cols-2 grid-cols-1 gap-3 p-4">
           
            {section.reverse ? (
              <>
                
                <div className="flex justify-center items-center w-full">
                  <video
                    className="rounded-lg shadow-md w-[350px] h-[220px]"
                    // autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={section.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                
                <div className="flex flex-col space-y-3 w-full">
                  <div className="flex items-center md:justify-start justify-center mb-3">
                    <div className="h-4 w-1 bg-green-500"></div>
                    <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                      {section.title}
                    </h1>
                  </div>
                  <div className="lg:text-3xl text-xl font-bold text-headingColor mb-3">
                    <h1>{section.subtitle}</h1>
                  </div>
                  <div className="text-gray-600 text-base">
                    <p>{section.description}</p>
                  </div>

                  
                  <div className="pt-3">
                    <a
                      href="/contact-us"
                      className="group border-[1px] px-5 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold flex items-center gap-2 w-[180px] hover:bg-green-500 hover:text-white duration-700 ease-in-out transition"
                    >
                      <span className="relative flex-[8] text-center">{section.buttonText}</span>
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-700 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                        <TiArrowRight className="text-lg" />
                      </span>
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
               
                <div className="flex flex-col space-y-3 w-full">
                  <div className="flex items-center md:justify-start justify-center mb-3">
                    <div className="h-4 w-1 bg-green-500"></div>
                    <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                      {section.title}
                    </h1>
                  </div>
                  <div className="lg:text-3xl text-xl font-bold text-headingColor mb-3">
                    <h1>{section.subtitle}</h1>
                  </div>
                  <div className="text-gray-600 text-base">
                    <p>{section.description}</p>
                  </div>

                 
                  <div className="pt-3">
                    <a
                      href="/contact-us"
                      className="group border-[1px] px-5 py-2 text-green-500 text-sm rounded-full border-green-500 font-semibold flex items-center gap-2 w-[180px] hover:bg-green-500 hover:text-white duration-700 ease-in-out transition"
                    >
                      <span className="relative flex-[8] text-center">{section.buttonText}</span>
                      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 flex-[2] transition duration-700 ease-in-out text-black group-hover:bg-white group-hover:text-green-500">
                        <TiArrowRight className="text-lg" />
                      </span>
                    </a>
                  </div>
                </div>

               
                <div className="flex justify-center items-center w-full">
                  <video
                    className="rounded-lg shadow-md w-[350px] h-[220px]"
                    // autoPlay
                    muted
                    controls
                  >
                    <source src={section.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </>
            )}
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default VideoPlayer;
