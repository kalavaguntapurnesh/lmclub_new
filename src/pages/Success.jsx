import React from 'react'
import success from "../assets/success.png";
import Logo from "../assets/LMDark.webp";
import { Link } from 'react-router-dom';
const Success = () => {
  return (
    <div>
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white w-[500px] p-6 rounded-lg shadow-lg">
       
            <div className="flex items-center justify-between mb-4">
              <img src={Logo} alt="Logo" className="w-12 h-12" />
              <h4 className="text-3xl font-bold text-center flex-1">
                <span className="text-black">LM</span>
                <span className="text-green-500">Club</span>
              </h4>
            </div>
    
    
            <div className="space-y-4">
    
              <div className='w-[90%] mx-auto  p-5 flex flex-col justify-center items-center gap-6 text-center'>
                <img src={success} alt="Logo" className="w-12 h-12 text-center" />
                <h3 className="text-2xl font-semibold text-center ">Payment Successful</h3>
              </div>
    
             
              {/* Login Button */}
              <div className="mt-6 text-center">
                <button
                
                  className={`w-1/3 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600`}
                   
                >
                <Link to="/">Go Back</Link> 
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Success