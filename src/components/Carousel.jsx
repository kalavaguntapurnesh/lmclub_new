import { MdOutlinePlumbing } from "react-icons/md";
import { MdElectricalServices } from "react-icons/md";
import { GiFloorPolisher } from "react-icons/gi";
import { GiGardeningShears } from "react-icons/gi";
import { FaPaintRoller } from "react-icons/fa";
import { GiBusDoors } from "react-icons/gi";
import { FaHouseDamage } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { GiWashingMachine } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaPenRuler } from "react-icons/fa6";

const Carousel = () => {
  const services = [
    {
      icon: <MdOutlinePlumbing />,
      heading: "Plumbing",
      link: "/contact-us",
    },
    {
      icon: <MdElectricalServices />,
      heading: "Electricals",
      link: "/contact-us",
    },
    {
      icon: <GiFloorPolisher />,
      heading: "Flooring",
      link: "/contact-us",
    },
    {
      icon: <GiGardeningShears />,
      heading: "Gardening",
      link: "/contact-us",
    },
    {
      icon: <FaPaintRoller />,
      heading: "Painting",
      link: "/contact-us",
    },
    {
      icon: <GiBusDoors />,
      heading: "Wood work",
      link: "/contact-us",
    },
    {
      icon: <FaHouseDamage />,
      heading: "Appliances",
      link: "/contact-us",
    },
    {
      icon: <GiVacuumCleaner />,
      heading: "Cleaning",
      link: "/contact-us",
    },
    {
      icon: <GiWashingMachine />,
      heading: "Washing",
      link: "/contact-us",
    },
    {
      icon: <FaKitchenSet />,
      heading: "Remodeling",
      link: "/contact-us",
    },
    {
      icon: <FaScrewdriverWrench />,
      heading: "Handymen",
      link: "/contact-us",
    },
    {
      icon: <FaPenRuler />,
      heading: "Architects",
      link: "/contact-us",
    },
  ];

  return (
    <div className="bg-white">
      <div className="relative pt-24">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="space-y-2">
              <div className="flex items-center text-center justify-center ">
                <div className="h-4 w-1 bg-mainColor"></div>
                <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                  home improvement
                </h1>
              </div>

              <div className="mx-auto max-w-[1000px] text-center">
                <h1 className="text-4xl font-semibold text-[#3d454d]">
                  For major home improvements, get free quotes from independent
                  pros.
                </h1>
              </div>
            </div>

            <div className="mx-auto max-w-[1000px] mt-8">
              <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={service.link}
                    className="bg-[#f8f9fa] h-[60px] w-[200px] rounded flex flex-row justify-center items-center"
                  >
                    <span className="w-4 h-4">{service.icon}</span>
                    <h1 className="ml-2 text-[#3d454d]">{service.heading}</h1>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
