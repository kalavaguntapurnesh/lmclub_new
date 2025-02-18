import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import success from "../assets/success.png";
import Logo from "../assets/LMDark.webp";

const VerifyEmail = () => {
  const { token } = useParams();
  const [isVerified, setIsVerified] = useState(false); // Track verification

  useEffect(() => {
    if (token && !isVerified) {
      verifyEmail(token);
    }
  }, [token, isVerified]);

  const verifyEmail = async (token) => {
    // Handle success response
    const style = document.createElement('style');
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

    try {
      const response = await axios.get(`http://localhost:9090/api/confirm/${token}`);
    // const response = await axios.get(`https://lmclub-backend.onrender.com/api/confirm/${token}`);
      if (response.data && response.data.message === "Email Verified Successfully") {
        setIsVerified(true);

        Swal.fire({
          html: `
           <div style="display: flex; flex-direction: column; align-items: center;">

                <!-- Logo + LMClub (Fixed Alignment) -->
                <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                    <!-- Logo (Top Left) -->
                    <img src="${Logo}" alt="Success" 
                        style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                    
                    <!-- LMClub (Centered) -->
                    <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                        <span style="color: black;">LM</span>
                        <span style="color: rgb(37, 218, 73);">Club</span>
                    </h4>
                </div>

                <!-- Success Image -->
                <div style="margin-bottom: 20px;">
                    <img src="${success}" alt="Success" style="width: 50px; height: 50px; margin: 0 10px;" />
                </div>

                <!-- Email Verified Text -->
                <div style="width: 100%; text-align: center;">
                    <h1 style="margin: 0; font-size: 30px;">Email Verified Successfully</h1>
                </div>

            </div>

          `,
          timer: 60000, // Keeps the success message for 1 minute
          timerProgressBar: true,
          customClass: {
            confirmButton: 'swal-custom-ok-button' 
          },
          confirmButtonText: 'Login Here',
          willClose: () => {
            window.location.href = 'http://localhost:5173/login';
            // window.location.href = 'https://lmclub.vercel.app/login';
            
          }
        });

      } else {
        setTimeout(() => {
          Swal.fire('Error', 'Something went wrong. Please try again later.', 'error');
        }, 60000); // Show error after 1 minute
      }
    } catch (error) {
      console.error('Error during email verification:', error);
      setTimeout(() => {
        Swal.fire('Error', 'This verification link is invalid or has expired.', 'error');
      }, 60000); // Delay error message by 1 minute
    }
  };

  return <div></div>;
};

export default VerifyEmail;
