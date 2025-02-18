import { useEffect } from "react";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { classNames } from "../components/classNames";

const ContactUsButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-5 z-20">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-mainColor transition duration-1000 ease-in-out inline-flex items-center rounded-full md:p-3 p-[10px] text-white shadow-sm "
        )}
      >
        <FaAngleUp className="md:h-5 md:w-5 w-[18px] h-[18px]" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ContactUsButton;
