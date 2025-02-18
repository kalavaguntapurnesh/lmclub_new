import React from "react";
import SecNavbar from "./SecNavbar";
import Hero from "./Hero";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* NavBar */}
      <SecNavbar />
      {/* Hero */}
      <Hero />
    </div>
  );
};

export default MainLayout;
