import { useState } from "react"; 
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import LMOne from "../assets/LMOne.webp";
import LMTwo from "../assets/LMTwo.webp";
import LMThree from "../assets/LMThree.webp";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const AppDesc = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Our Vision",
      content: "To foster enhanced collaboration and mutual benefit among our members and business affiliates.",
    },
    {
      title: "Our Strategy",
      content: `
        <ul>
          <li><strong>Reward Collaboration:</strong> Recognize member initiatives with local and global businesses through incentives.</li>
          <li><strong>Promote Entrepreneurship:</strong> Enable members to market new businesses via social media and earn rewards.</li>
          <li><strong>Expand Horizons:</strong> Launch an International Membership Club with diverse packages tailored to different needs.</li>
          <li><strong>Engage Members:</strong> Provide platforms like “Broadcast – BeeHive and Grow” for member engagement and growth.</li>
          <li><strong>Build a Global Community:</strong> Establish a global presence that encourages networking and mutual benefits.</li>
          <li><strong>Foster Social Bonds:</strong> Develop a nurturing environment that fosters enduring friendships and a robust social network.</li>
          <li><strong>Cultivate a Thriving Culture:</strong> Promote an enriching and supportive culture within our community.</li>
        </ul>
      `,
    },
    {
      title: "Our Goal",
      content: "To expand our vibrant community to 2.5 billion members worldwide, creating a network of opportunities and shared success.",
    },
  ];

  return (
    <div className="pt-12 pb-0">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] p-4">
          <div>
                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-wrap flex-col lg:items-start items-center pb-3"
                  >
                    <div className="lg:text-start text-center leading-relaxed font-bold text-black">
                      <p className="lg:text-4xl text-2xl">
                        Empowering Connections & Cultivating Success
                      </p>
                    </div>
                    <div className="md:w-36 w-28 h-1 border-b-2 border-green-500 mt-[1px]"></div>
                  </motion.div>
                  <motion.p
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-gray-600 pt-3 lg:text-start text-center"
                  >
                    Welcome to LM Club – where networking meets opportunity! Our
                    innovative widgets are designed to empower you, reward you,
                    and make your life easier. Whether you&apos;re looking to
                    grow your network, share valuable insights, or promote your
                    business, LM Club has the tools to make it happen.
                  </motion.p>
                </div>
           {/* About LM Club Section */}
<div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-12">
  {/* Image */}
  <motion.div
    variants={fadeIn("down", 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="w-full h-[450px]"
  >
    <img src={LMOne} alt="LM Club" className="rounded-lg w-full h-full object-cover" />
  </motion.div>

  {/* Text */}
  <motion.div
    variants={fadeIn("up", 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="lg:p-6 flex items-center"
  >
    <div>
      <h2 className="lg:text-3xl text-2xl font-bold text-center lg:text-left">About LM Club</h2>
      <p className="text-gray-600 pt-4">
        Laoe Maom is more than a membership club; it’s a community built on the principles of collaboration, positivity, and shared success. 
        Founded by Richard Anderson and Sandy Pittman, Laoe Maom focuses on fostering a positive culture that energizes and 
        motivates its members and businesses to network and create opportunities together.
      </p>

      <p className="text-gray-600 pt-4">
        At the heart of Laoe Maom lies the belief that "Together Everyone Achieves More" – the power of teamwork and human cooperation. 
        Richard, alongside his family, is deeply committed to creating an organization that values connections and helps members 
        achieve great goals, step by step. The inclusion of family symbolizes the core values of unity, trust, and mutual support that Laoe Maom embodies.
      </p>

      <p className="text-gray-600 pt-4">
        Built on the principle of "Least Amount of Effort, Most Amount of Money" (LAOE MAOM), the organization 
        remains progressive and adaptable, evolving with the changing needs of its members. It’s a global collaboration 
        where individuals and businesses come together, recognizing that mutual support drives collective success.
      </p>
    </div>
  </motion.div>
</div>


            {/* Our Philosophy Section */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-12">
              {/* Image */}
              <motion.div
                variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="w-full max-w-[600px] h-[300px] mx-auto"
              >
                <img src={LMTwo} alt="Our Philosophy" className="rounded-lg w-full h-full object-cover" />
              </motion.div>

              {/* Text */}
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="lg:p-6 flex items-center"
              >
                <div>
                  <h2 className="lg:text-3xl text-2xl font-bold text-center lg:text-left">Our Philosophy</h2>
                  <p className="text-gray-600 pt-4">
                    Laoe Maom embodies progress and adaptability, responding dynamically to the evolving relationships and interests within our global landscape. 
                    We are a collective of individuals and businesses worldwide, committed to mutual support and shared success. 
                  </p>
                </div>
              </motion.div>
            </div>

            
            {/* Vision, Strategy, and Goals Section */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-12">
              {/* Image */}
              <motion.div
                variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="w-full max-w-[600px] h-[700px] mx-auto"
              >
                <img src={LMThree} alt="Vision, Strategy, and Goals" className="rounded-lg w-full h-full object-cover" />
              </motion.div>

              {/* Collapsible Sections */}
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="lg:p-6 flex items-center"
              >
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-3xl font-semibold mb-4 text-center">Vision, Strategy, and Goals</h2>
                  {sections.map((section, index) => (
                    <div key={index} className="mb-2">
                      <button
                        onClick={() => toggleSection(index)}
                        className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 text-left text-lg font-medium border rounded-md"
                      >
                        {section.title}
                        {openIndex === index ? <FaAngleDown size={20} /> : <FaAngleRight size={20} />}
                      </button>
                      {openIndex === index && (
                        <div className="p-4 bg-gray-50 border-l-4 border-gray-300">
                          <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: section.content }} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDesc;
