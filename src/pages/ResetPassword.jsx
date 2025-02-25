
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PasswordChecklist from 'react-password-checklist';
import NavBar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id, token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(
        // `http://localhost:9090/api/resetPassword/${id}/${token}`,
        `https://lmclub-backend.onrender.com/api/resetPassword/${id}/${token}`,
        { password }
      );

      if (response.status === 200) {
        Swal.fire({
          title: 'Password Reset Successful',
          icon: 'success',
        });
        navigate('/login');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className="lg:pt-28 pt-16">
      <NavBar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold text-center text-green-400">Reset Password</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="password" className="block text-l text-gray-700 font-bold">
                New Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter new password"
                required
              />
            </div>
            <PasswordChecklist
              rules={['minLength', 'specialChar', 'number', 'capital', 'match']}
              minLength={8}
              value={password}
              valueAgain={confirmPassword}
              onChange={(isValid) => {}}
            />
            <div>
              <label htmlFor="confirmPassword" className="block text-l font-bold text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm new password"
                required
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-400 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-700"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
