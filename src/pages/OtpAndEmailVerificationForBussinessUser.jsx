import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';
import success from "../assets/success.png";
import Logo from "../assets/LMDark.webp";
import Error from "../assets/error.png";

const OtpInput = ({ onOtpChange }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']); // An array to hold the OTP digits
  
    const handleChange = (e, index) => {
      const value = e.target.value;
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      onOtpChange(newOtp.join('')); // Pass the full OTP to the parent component

       // Move to the next box if the value is entered
       if (index < otp.length - 1 && value !== '') {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
      
    };
  
     

    const handleKeyUp = (e, index) => {
      if (e.key === 'Backspace' && otp[index] === '') {
        if (index > 0) {
          document.getElementById(`otp-input-${index - 1}`).focus();
        }
      }
    };
  
    const handleFocus = (index) => {
      if (otp[index] === '') {
        document.getElementById(`otp-input-${index}`).select();
      }
    };
  
    return (
      <div className="flex justify-center space-x-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyUp={(e) => handleKeyUp(e, index)}
            onFocus={() => handleFocus(index)}
            className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        ))}
      </div>
    );
  };


const OtpAndEmailVerificationForBussinessUser = () => {
   const location = useLocation();
  const { bussinessEmail, phoneNumber } = location.state || {};
  console.log(bussinessEmail);
  console.log(phoneNumber);
  const [otp, setOtp] = useState('');
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [smsVerified, setSmsVerified] = useState(false);
  const [isLoginEnabled, setIsLoginEnabled] = useState(false);
  const navigate = useNavigate();
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
  // Function to verify OTP entered by the user

  const handleOtpChange = (newOtp) => {
    setOtp(newOtp);
  };

  console.log("entered otp : ", otp);
  
  const verifySMS = async () => {
    try {
      // const response = await axios.post("http://localhost:9090/api/verify-otp", { phone: phoneNumber, otp });
      const response = await axios.post("https://lmclub-backend.onrender.com/api/verify-otp", { phone: phoneNumber, otp });
      console.log(response);
      console.log(phoneNumber);
      console.log(otp);
      if (response.status === 200) {
        // Swal.fire({
        //   icon: 'success',
        //   title: 'Phone Verified',
        //   text: 'Your phone number has been successfully verified.',
        // })
          Swal.fire({
                html: `
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                            <img src="${Logo}" alt="Logo" style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                            <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                                <span style="color: black;">LM</span>
                                <span style="color: rgb(37, 218, 73);">Club</span>
                            </h4>
                        </div>

                            <!-- Success Image -->
                        <div style="margin-bottom: 20px;">
                            <img src="${success}" alt="Success" style="width: 50px; height: 50px; margin: 0 10px;" />
                        </div>
                                

                        <div style="display: flex; flex-direction: column; align-items: center; gap:20px">     
                            <h1 style="font-size: 25px;">Your phone number has been successfully verified.</h1>
                        </div>
                    </div>
                `,
                customClass: {
                  confirmButton: 'swal-custom-ok-button',
                }
              })
        .then(() => {
          setSmsVerified(true);
        });
      } else {
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Invalid OTP',
        //   text: 'The OTP you entered is incorrect.',
        // });

        Swal.fire({
            html: `
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                        <img src="${Logo}" alt="Logo" style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                        <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                            <span style="color: black;">LM</span>
                            <span style="color: rgb(37, 218, 73);">Club</span>
                        </h4>
                    </div>

                        <!-- Success Image -->
                    <div style="margin-bottom: 20px;">
                        <img src="${Error}" alt="Success" style="width: 50px; height: 50px; margin: 0 10px;" />
                    </div>
                            

                    <div style="display: flex; flex-direction: column; align-items: center; gap:20px">     
                        <h1 style="font-size: 25px;">The OTP you entered is incorrect.</h1>
                    </div>
                </div>
            `,
            customClass: {
              confirmButton: 'swal-custom-ok-button',
            }
          })
      }
    } catch (error) {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: 'Something went wrong while verifying OTP.',
    //   });
    Swal.fire({
        html: `
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                    <img src="${Logo}" alt="Logo" style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                    <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                        <span style="color: black;">LM</span>
                        <span style="color: rgb(37, 218, 73);">Club</span>
                    </h4>
                </div>

                    <!-- Success Image -->
                <div style="margin-bottom: 20px;">
                    <img src="${Error}" alt="Success" style="width: 50px; height: 50px; margin: 0 10px;" />
                </div>
                        

                <div style="display: flex; flex-direction: column; align-items: center; gap:20px">     
                    <h1 style="font-size: 25px;">Something went wrong while verifying OTP.</h1>
                </div>
            </div>
        `,
        customClass: {
          confirmButton: 'swal-custom-ok-button',
        }
      })
    }
  };

  // Function to check both email and OTP verification status
  const checkVerificationStatus = () => {
    if (smsVerified && emailVerified) {
      setIsLoginEnabled(true);  // Enable login button once both verifications are done
    }
  };

  // Function to check email verification status
  const checkEmailVerification = async () => {
    try {
      // const emailResponse = await axios.get(`http://localhost:9090/api/check-email-verification-for-bussiness?bussinessEmail=${bussinessEmail}`);
    const emailResponse = await axios.get(`https://lmclub-backend.onrender.com/api/check-email-verification-for-bussiness?bussinessEmail=${bussinessEmail}`);
      setEmailVerified(emailResponse.data.verified);
      Swal.fire({
        html: `
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                    <img src="${Logo}" alt="Logo" style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                    <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                        <span style="color: black;">LM</span>
                        <span style="color: rgb(37, 218, 73);">Club</span>
                    </h4>
                </div>

                    <!-- Success Image -->
                <div style="margin-bottom: 20px;">
                    <img src="${success}" alt="Success" style="width: 50px; height: 50px; margin: 0 10px;" />
                </div>
                        

                <div style="display: flex; flex-direction: column; align-items: center; gap:20px">     
                    <h1 style="font-size: 25px;">We have sent an email, Please verify your email.</h1>
                </div>
            </div>
        `,
        customClass: {
          confirmButton: 'swal-custom-ok-button',
        }
      })


    } catch (error) {

    Swal.fire({
        html: `
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="width: 100%; display: flex; align-items: center; justify-content: center; position: relative; margin-bottom: 20px;">
                    <img src="${Logo}" alt="Logo" style="position: absolute; top: 0; left: 0; width: 50px; height: 50px; margin: 10px;" />
                    <h4 style="margin: 0; font-size: 30px; font-weight: bold;">
                        <span style="color: black;">LM</span>
                        <span style="color: rgb(37, 218, 73);">Club</span>
                    </h4>
                </div>

                    <!-- Success Image -->
                <div style="margin-bottom: 20px;">
                    <img src="${Error}" alt="Success" style="width: 50px; height: 50px; margin: 0 10px;" />
                </div>
                        

                <div style="display: flex; flex-direction: column; align-items: center; gap:20px">     
                    <h1 style="font-size: 25px;">Error while checking email verification:</h1>
                </div>
            </div>
        `,
        customClass: {
          confirmButton: 'swal-custom-ok-button',
        }
      })

    }
  };

  useEffect(() => {
    checkEmailVerification();
  }, [bussinessEmail]);

  useEffect(() => {
    checkVerificationStatus();  
  }, [smsVerified, emailVerified]); 


  // 6 boxes 

  
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white w-[500px] p-6 rounded-lg shadow-lg">
   
        <div className="flex items-center justify-between mb-8">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
          <h4 className="text-3xl font-bold text-center flex-1">
            <span className="text-black">LM</span>
            <span className="text-green-500">Club</span>
          </h4>
        </div>


        <div className="space-y-4">

          <div className='w-[90%] mx-auto shadow-lg p-5 rounded-lg bg-gray-300'>
            <h3 className="text-2xl font-semibold text-center ">SMS Verification</h3>
            <p className={`text-center text-lg ${smsVerified ? 'text-green-500' : 'text-red-500'}`}>
            <span className='text-gray-800 text-2xl font-bold'>Status : </span> {smsVerified ? 'Verified' : 'Pending'}
            </p>
            {!smsVerified && (
              <div className="mt-3">
                {/* <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                /> */}
                 {/* OTP Input */}
                <OtpInput onOtpChange={handleOtpChange} />  
                <div className='flex justify-end'>
                    <button
                    onClick={verifySMS}
                    className="w-full py-2 w-1/3 bg-green-500 text-white rounded-lg mt-4 hover:bg-green-600 transition"
                    >
                    Verify OTP
                    </button>
                </div>
              </div>
            )}
          </div>

          {/* Email Verification */}
          <div className='w-[90%] mx-auto shadow-lg p-5 rounded-lg bg-gray-300'>
            <h3 className="text-2xl font-semibold text-center">Email Verification</h3>
            <p className={`text-lg text-center ${emailVerified ? 'text-green-500' : 'text-red-500'}`}>
              <span className='text-gray-800 text-2xl font-bold'>Status : </span>{emailVerified ? 'Verified' : 'Pending'}
        
            </p>
            {!emailVerified && (
              <div className="mt-3 flex justify-end">
                <button
                  onClick={checkEmailVerification}
                  className="w-full py-2 w-1/3 bg-green-500 text-white rounded-lg mt-4 hover:bg-green-600 transition"
                >
                  Verify Email
                </button>
              </div>
            )}
          </div>

          {/* Login Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/login")}
              className={`w-1/3 py-3 bg-green-500 text-white rounded-lg ${isLoginEnabled ? 'hover:bg-green-600' : 'bg-gray-500 cursor-not-allowed'}`}
              disabled={!isLoginEnabled}  
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default OtpAndEmailVerificationForBussinessUser