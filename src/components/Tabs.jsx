import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="bg-white">
      <div className="relative md:pt-12 pt-8 pb-8">
        <div className="w-full">
          <div className="w-full px-2 mx-auto max-w-[1400px]">
            <div className="justify-center w-full ">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex">
                  {children.map((child) => (
                    <button
                      key={child.props.label}
                      className={`${
                        activeTab === child.props.label
                          ? "text-white bg-green-600 lg:p-3.5 mx-1 md:text-base text-sm lg:rounded-full rounded-full"
                          : "bg-gray-100 md:text-base text-sm mx-1 lg:p-3.5 lg:rounded-full rounded-full"
                      } flex-1 lg:py-3 py-4`}
                      onClick={(e) => handleClick(e, child.props.label)}
                    >
                      {child.props.label}
                    </button>
                  ))}
                </div>
                <div className="py-8 rounded bg-[#f8f9fa]">
                  {children.map((child) => {
                    if (child.props.label === activeTab) {
                      return (
                        <div key={child.props.label}>
                          {child.props.children}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };
