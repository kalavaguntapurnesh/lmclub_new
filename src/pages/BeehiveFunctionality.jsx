import React from 'react'
import { BsEye } from "react-icons/bs";
import { MdOutlinePostAdd } from "react-icons/md";
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import Logo from "../assets/LMDark.webp";
import Logo from "../assets/LMDarkLogo.webp";
import Swal from 'sweetalert2';

const BeehiveFunctionality = () => {
      const navigate = useNavigate();
      const [selectedOption, setSelectedOption] = useState(null);

      const buttonText = {
        viewPosts: "Discover the latest posts from the community and stay updated on exciting deals, events, and more!",
        addPosts: "Start sharing your insights and experiences now to connect with the community and earn rewards!"
      };
    
      // Handle button click
      const handleButtonClick = (option) => {
        setSelectedOption(option);
      };
      
      const style = document.createElement("style");
      style.innerHTML = `
          .swal-custom-ok-button {
            background-color:rgb(27, 202, 103); /* Custom color */
            color:white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 5px;
          }
      
          .swal-custom-ok-button:hover {
            background-color:rgb(18, 91, 25); /* Hover color */
          }
      `;
      document.head.appendChild(style);

      // Handle continue button click
      const handleContinueClick = () => {
        if(!selectedOption){
          // alert("please select any one of it!")
            Swal.fire({
                html: `
                  <div style="display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 30px;">
                      <img src="${Logo}" alt="Logo" 
                        style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; " />
                        <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                          <span style="color: black;">LM</span>
                          <span style="color: rgb(37, 218, 73);">Club</span>
                        </h4>
                    </div>
                    <div style="text-align: center; font-size: 22px; font-weight: bold; color: #333; margin: 10px;">
                      <p>Please select either Add Posts or View Posts</p>
                    </div>
                  </div>
                `,
                customClass: {
                  confirmButton: "swal-custom-ok-button",
                },
                footer: `
                  <p style="font-size: 12px; text-align: center; width: 100%;">© 2025, Laoe Maom. All Rights Reserved.</p>
                `,
            });

        }
        if (selectedOption === 'viewPosts') {
          navigate('/beehive-workflow/view-posts');
        } else if (selectedOption === 'addPosts') {
          navigate('/beehive-workflow/add-posts');
        }
      };
    
      return (
        <div className="w-full flex items-center justify-center pt-16 px-4">
          <div className="max-w-[800px] w-full mx-auto h-auto flex flex-col items-center justify-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-center gap-4 bg-white p-6 rounded-lg">
            <div className="flex flex-wrap flex-col items-center pb-3">
              <div className="flex justify-center gap-8 text-center mt-4">
                <img src={Logo} alt="logo" className="lg:w-[52px] lg:h-auto w-[35px] h-[35px]" />
                <h3 className="lg:text-3xl text-2xl font-bold text-headingColor">
                  Choose Your Preference and Proceed
                  <div className="md:w-[480px] mx-auto w-[250px] h-2 border-b-2 border-green-500 mt-[2px]"></div>
                </h3>
              </div>
              
            </div>
            <div className="lg:flex-row flex flex-col w-full gap-4">
            
              <button
                className="p-4 w-full"
                onClick={() => handleButtonClick('addPosts')}
              >
                <div className="flex flex-col items-center bg-gray-300 justify-center border border-gray-400 cursor-pointer hover:border-green-600 hover:border-2 text-center gap-2 w-full pb-2 pt-2">
                  <MdOutlinePostAdd className="lg:w-20 lg:h-20 w-9 h-9 bg-transparent text-gray-700" />
                  <h1 className="p-2 lg:text-3xl text-xl">Add Posts</h1>
                </div>
              </button>

              <button
                className="p-4 w-full"
                onClick={() => handleButtonClick('viewPosts')}
              >
                <div className="flex flex-col items-center bg-gray-300 justify-center border border-gray-400 cursor-pointer hover:border-green-600 hover:border-2 text-center gap-2 w-full pb-2 pt-2">
                  <BsEye className="lg:w-20 lg:h-20 w-10 h-10 text-gray-700" />
                  <h1 className="p-2 lg:text-3xl text-xl">View Posts</h1>
                </div>
              </button>
              
            </div>
    
            {selectedOption && (
              <div className="mt-4 p-4 border border-gray-300 bg-gray-100 text-center">
                <p className="text-lg text-gray-700">
                  {buttonText[selectedOption]}
                </p>
              </div>
            )}
    
            <div className="flex justify-between w-full mt-6">
              <button
                onClick={() => navigate('/dashboard')}
                className="px-12 w-[200px] py-1.5 bg-gray-500 text-white cursor-pointer hover:bg-gray-700 duration-1000 ease-in-out transition"
              >
                Cancel
              </button>
    
              <button
                onClick={handleContinueClick}
                className="px-12 w-[200px] py-1.5 bg-gray-500 text-white cursor-pointer hover:bg-gray-700 duration-1000 ease-in-out transition"
              >
                Continue
              </button>
            </div>
            <div className="text-center text-xs mt-3 mb-4">
                <p>© 2025, Laoe Maom. All Rights Reserved.</p>
            </div>
          </div>
          
        </div>
      );
    };
    

export default BeehiveFunctionality