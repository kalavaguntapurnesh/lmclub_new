import { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import dayjs from "dayjs";
import platinum from "../assets/platinum.jpg";
import bronze from "../assets/bronze.jpg";
import silver from "../assets/silver.jpg";
import gold from "../assets/gold.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import WhatsApp from "../components/WhatsApp";

const Events = () => {
  const [search, setSearch] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const monthInputRef = useRef(null);
  const dayInputRef = useRef(null);

  const events = [
    { id: 1, name: "New Year Party", date: "2025-01-05", image: platinum },
    { id: 2, name: "Tech Conference", date: "2025-03-20", image: silver },
    { id: 3, name: "Startup Meetup", date: "2025-04-15", image: bronze },
    { id: 4, name: "Music Fest", date: "2024-12-10", image: gold },
  ];

  const handleMonthClick = () => {
    if (monthInputRef.current) monthInputRef.current.showPicker();
  };

  const handleDayClick = () => {
    if (dayInputRef.current) dayInputRef.current.showPicker();
  };

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesMonth = selectedMonth
      ? event.date.startsWith(selectedMonth)
      : true;
    const matchesDay = selectedDay ? event.date === selectedDay : true;
    return matchesSearch && matchesMonth && matchesDay;
  });

  const pastEvents = events.filter((event) =>
    dayjs(event.date).isBefore(dayjs())
  );

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <WhatsApp />
      <div className="lg:pt-28 pt-24">
        <div className="relative">
          <div className="w-full mx-auto max-w-[1400px]">
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-center">
                <div className="h-4 w-1 bg-green-500"></div>
                <h1 className="ml-2 font-bold text-green-500 lg:uppercase">
                  Upcoming Events
                </h1>
              </div>
              <h1 className="lg:text-4xl text-2xl text-center font-bold text-headingColor">
                Join us for exciting networking opportunities
              </h1>
              <p className="text-gray-600 text-center">
                Stay informed, upcoming occasions, major announcements, key
                happenings, upcoming conferences, networking opportunities,
                don’t miss out!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto p-4">
        <div className="flex items-center border-2 border-gray-500 rounded-lg overflow-hidden shadow-lg bg-gray-100">
          <div className="p-4 bg-green-600 flex items-center justify-center min-w-[60px]">
            <FaSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            placeholder="Search For Events"
            className="w-full p-4 outline-none text-lg bg-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex items-center border-l pl-3 space-x-2">
            <button className="relative bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-[12px] rounded-full flex items-center justify-center whitespace-nowrap overflow-hidden shine-effect">
              Find Events
            </button>
            <button className="relative px-4 py-3 border border-gray-500 rounded-lg hover:bg-gray-300">
              List
            </button>
            <div className="relative">
              <input
                type="month"
                ref={monthInputRef}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                onChange={(e) => setSelectedMonth(e.target.value)}
              />
              <button
                onClick={handleMonthClick}
                className="relative px-4 py-3 border border-gray-500 rounded-lg hover:bg-gray-300"
              >
                Month
              </button>
            </div>
            <div className="relative">
              <input
                type="date"
                ref={dayInputRef}
                className="absolute inset-0 opacity-0 w-full h-full ml-20 cursor-pointer"
                onChange={(e) => setSelectedDay(e.target.value)}
              />
              <button
                onClick={handleDayClick}
                className="relative px-4 py-3 border border-gray-500 rounded-lg hover:bg-gray-300"
              >
                Day
              </button>
            </div>
          </div>
        </div>
        <h2 className="mt-6 text-lg font-bold text-gray-700">
          Upcoming Events
        </h2>
        <div className="mt-2 border rounded-lg shadow-md overflow-hidden bg-white divide-y">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className="p-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-all"
              >
                <span className="w-1/4 text-lg font-semibold text-gray-700">
                  {dayjs(event.date).format("MMM D, YYYY")}
                </span>
                <span className="w-1/2 text-center font-medium text-gray-800">
                  {event.name}
                </span>
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-16 h-16 rounded-md object-cover border border-gray-300"
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center p-4">No events found.</p>
          )}
        </div>
        <h2 className="mt-6 text-lg font-bold text-gray-700">Past Events</h2>
        <div className="mt-2 border rounded-lg shadow-md overflow-hidden bg-gray-100 divide-y">
          {pastEvents.length > 0 ? (
            pastEvents.map((event) => (
              <div
                key={event.id}
                className="p-5 flex items-center justify-between bg-gray-100 hover:bg-gray-200 transition-all"
              >
                <span className="w-1/4 text-lg font-semibold text-gray-700">
                  {dayjs(event.date).format("MMM D, YYYY")}
                </span>
                <span className="w-1/2 text-center font-medium text-gray-800">
                  {event.name}
                </span>
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-16 h-16 rounded-md object-cover border border-gray-400"
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center p-4">
              No past events found.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Events;
