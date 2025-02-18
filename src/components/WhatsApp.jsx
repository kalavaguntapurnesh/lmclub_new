import { useEffect } from "react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { classNames } from "../components/classNames";

const WhatsApp = () => {
  const phoneNumber = "16782004524";
  const message =
    "Hello LM Club, I need your guidance on professional technicians..."; // Pre-filled message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    if (window.pageYOffset > 120) {
      setIsVisible(true);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 lg:right-6 right-5 z-20">
      <a
        href={whatsappUrl}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-mainColor inline-flex items-center rounded-full md:p-3 p-[10px] text-white "
        )}
      >
        <SiWhatsapp className="md:h-[22px] md:w-[22px] w-[18px] h-[18px] text-white" aria-hidden="true" />
      </a>
    </div>
  );
};

export default WhatsApp;
